import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { dbService, storageService } from "../../../Loginbase";
import { ref, uploadString, getDownloadURL } from "@firebase/storage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
// import TextEditor from './TextEditor';
import TextScope from "./TextScope";
import { message } from "antd";
import { Input } from "reactstrap";

const Factory = ({ userObj }) => {
  const [text, setText] = useState("");
  const [attachment, setAttachment] = useState("");
  //사진 첨부 없이 텍스트만 트윗하고 싶을 때도 있으므로 기본 값을 ""로 해야한다.
  //트윗할 때 텍스트만 입력시 이미지 url ""로 비워두기 위함
  const [IsPublic, setIsPublic] = useState(true);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (text === "") return message.error("내용을 작성해주세요.");
    let attachmentUrl = "";
    if (attachment !== "") {
      message.info("게시글을 업로드 중입니다.");
      const attachmentRef = ref(storageService, `${userObj.uid}/${uuidv4()}`);
      //storage 참조 경로로 파일 업로드 하기
      const response = await uploadString(
        attachmentRef,
        attachment,
        "data_url"
      );
      //storage 참조 경로에 있는 파일의 URL을 다운로드해서 attachment 변수에 넣어서 업데이트
      attachmentUrl = await getDownloadURL(attachmentRef);
    }
    //이미지 첨부하지 않고 텍스트만 올리고 싶을 때도 있기 때문에 attachment가 있을때만 아래 코드 실행
    //이미지 첨부하지 않은 경우엔 attachment=""이 된다.
    const textObj = {
      email: userObj.email,
      displayName: userObj.displayName,
      text: text,
      createdAt: serverTimestamp(),
      creatorId: userObj.uid,
      creatorPhoto: userObj.photoURL,
      IsPublic,
      attachmentUrl,
    };
    await addDoc(collection(dbService, "Texts"), textObj);
    setText("");
    onClearAttachment();

    return message.success("게시글이 업로드 되었습니다.");
  };

  const onChange = ({ target: { value } }) => {
    setText(value);
  };

  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(theFile);
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
  };

  const onClearAttachment = () => {
    const input = document.querySelector("input[type=file]");
    input.value = ""; // 파일 선택 창 초기화
    setAttachment("");
  };

  const onChangeScope = () => {
    setIsPublic(!IsPublic);
    if (IsPublic) {
      return message.info('게시글이 모두에게 공개됩니다.');
    } else {
      return message.info('게시글이 관리자에게만 공개됩니다.');
    }
  };
  return (
    <div className="factoryContainer">
      <TextScope IsPublic={IsPublic} onChangeScope={onChangeScope} />
      <form onSubmit={onSubmit} className="factoryForm">
        <div className="factoryInput__container">
          <Input
            className="factoryInput__input"
            type="text"
            placeholder="내용을 입력해주세요."
            onChange={onChange}
            maxLength={120}
            value={text}
            style={{
              border: "2px solid #04AAFF",
            }}
          />
          <input type="submit" value="&rarr;" className="factoryInput__arrow" />
        </div>
        <div className="factoryInput__attach">
          <label htmlFor="attach-file" className="factoryInput__label">
            <span>사진 추가하기</span> &nbsp;
            <FontAwesomeIcon icon={faPlus} />
          </label>
          <input
            id="attach-file"
            type="file"
            accept="image/*"
            onChange={onFileChange}
            style={{
              opacity: 0,
            }}
          />

          {attachment && (
            <div className="factoryForm__attachment">
              <img
                alt="이미지를 불러오는데 실패했습니다."
                src={attachment}
                style={{
                  backgroundImage: attachment,
                }}
              />
              <div className="factoryForm__clear" onClick={onClearAttachment}>
                <span>Remove</span>
                <FontAwesomeIcon icon={faTimes} />
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Factory;
