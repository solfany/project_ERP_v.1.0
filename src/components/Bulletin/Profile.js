import React, { useState, useEffect } from 'react';
import { updateProfile } from '@firebase/auth';
import { authService, dbService } from '../../Loginbase';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from 'actions';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import {
  collection,
  updateDoc,
  getDocs,
  orderBy,
  query,
  where,
} from '@firebase/firestore';
import { message } from 'antd';
import CustomButton from 'components/Button/CustomButton';

const Profile = () => {
  // const init = useSelector((state) => state.init);
  const userObj = useSelector((state) => state.userObj);
  const [PhotoURL, setPhotoURL] = useState(userObj.photoURL);
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const history = useHistory();
  const dispatch = useDispatch();

  const getMyProfile = async () => {
    const q = query(
      collection(dbService, 'Texts'),
      where('creatorId', '==', userObj.uid),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
  };

  useEffect(() => {
    getMyProfile();
  }, []);

  const onLogOutClick = () => {
    authService.signOut();
    history.push('/');
    return message.success('로그아웃 되었습니다.');
  };

  const onUpdateProfile = async (event) => {
    event.preventDefault();
    if (newDisplayName === '')
      return message.warning('이름 혹은 닉네임을 입력해 주세요.');

    if (userObj.displayName !== newDisplayName) {
      await updateProfile(authService.currentUser, {
        displayName: newDisplayName,
      });
      onUpdateDisplayName('Text');
      onUpdateDisplayName('Comments');

      setNewDisplayName('');
    }
    let profileImageURL = '';

    if (PhotoURL !== userObj.photoURL) {
      message.warn('프로필을 업데이트 중입니다.');
      const attachmentRef = dbService.ref().child(`${userObj.uid}/${uuidv4()}`);
      const response = await attachmentRef.putString(PhotoURL, 'data_url');
      profileImageURL = await response.ref.getDownloadURL();

      await userObj.updateProfile({
        ...userObj,
        photoURL: profileImageURL,
      });
      dispatch(
        updateUser({
          ...userObj,
          displayName: newDisplayName,
        })
      );
      setPhotoURL(profileImageURL);
    }
    return message.success('프로필이 업데이트 되었습니다.');
  };

  const onUpdateDisplayName = async (collectionName) => {
    const querySnapshot = await getDocs(
      query(
        collection(dbService, collectionName),
        where('creatorId', '==', userObj.uid),
        orderBy('createdAt', 'desc')
      )
    );
    querySnapshot.forEach((doc) => {
      updateDoc(doc.ref, {
        displayName: newDisplayName,
      });
    });
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };
  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   if (userObj.displayName !== newDisplayName) {
  //     await updateProfile(authService.currentUser, {
  //       displayName: newDisplayName,
  //     });
  //     dispatch(
  //       updateUser({
  //         ...userObj,
  //         displayName: newDisplayName,
  //       })
  //     );
  //   }
  // };
  const onFileChange = (event) => {
    const { files } = event.target;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const { result } = finishedEvent.currentTarget;
      setPhotoURL(result);
    };
    if (theFile) reader.readAsDataURL(theFile);
  };
  return (
    <div
      style={{
        transform: 'translateX(150%)',
        border: '2px solid black',
        width: '300px',
      }}
    >
      {PhotoURL ? (
        <img className="profile__img" alt="프로필 이미지" src={PhotoURL} />
      ) : (
        <div className="profile__img__container">
          <FontAwesomeIcon icon={faUserCircle} size="6x" />
        </div>
      )}
      <form onSubmit={onUpdateProfile} className="profileForm">
        <label htmlFor="image-file" className="profile__label">
          <span>프로필 이미지</span>
          <FontAwesomeIcon icon={faPlus} />
        </label>
        <input
          id="image-file"
          type="file"
          accept="image/*"
          onChange={onFileChange}
          style={{ opacity: 0 }}
        />
        <input
          type="text"
          placeholder="이름 혹은 닉네임을 입력해 주세요 :)"
          value={newDisplayName}
          onChange={onChange}
          className="formInput"
          maxLength={8}
        />
        <input
          type="submit"
          value="프로필 업데이트"
          className="formBtn"
          style={{ marginTop: 10 }}
        />
      </form>
      <CustomButton
        type="button"
        className="blue"
        onClick={onLogOutClick}
        text="로그아웃"
      />
    </div>
  );
};

export default Profile;
