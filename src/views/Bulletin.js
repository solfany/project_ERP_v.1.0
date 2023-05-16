import { dbService } from './../Loginbase';
import { query, orderBy, collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './../components/Bulletin/Bulletin.css';
import BulletinTab from 'components/Bulletin/Tabs/BulletinTab';
import { Route, Switch } from 'react-router-dom';
import Auth from '../components/login/Auth';
import { message } from 'antd';

function Bulletin() {
  const history = useHistory();
  const init = useSelector((state) => state.init);
  const userObj = useSelector((state) => state.userObj);
  const [texts, setTexts] = useState([]);
  const [Comments, setComments] = useState([]);
  const [notices, setNotices] = useState([]);
  const [noticeComments, setNoticeComments] = useState([]);
  // texts : 게시글 & Comment : 댓글
  
  // --------------------------------공지사항 탭 관련 함수--------------------------------------------------------
  
  useEffect(() => {
    if (init && userObj) {
      const q = query(
        collection(dbService, 'Notices'),
        orderBy('createdAt', 'desc')
        );
        const onTextListener = onSnapshot(q, (snapshot) => {
        const noticeArr = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNotices(noticeArr);
      });
      
      return () => onTextListener();
    } else {
      message.error('로그인 정보가 없습니다. 다시 로그인 해주세요.')
      history.push('/admin/MainLogin');
    }
  }, [history]);
  
  // 댓글가져오는 useEffect
  useEffect(() => {
    const q = query(
      collection(dbService, 'NoticeComments'),
      orderBy('createdAt', 'asc')
      );
      const onCommentListener = onSnapshot(q, (querySnapshot) => {
        const noticeCommentArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNoticeComments(noticeCommentArray);
      });
      return onCommentListener;
    }, []);
    
    const noticeCommentList = (textId) =>
    noticeComments.filter((comment) => comment.responseTo === textId);
    
    // ---------------------------------익명게시판 탭 관련 함수--------------------------------------------------------

    // 익명게시판 게시글 가져오는 useEffect
    useEffect(() => {
      if (init && userObj) {
        const q = query(
          collection(dbService, 'Texts'),
          orderBy('createdAt', 'desc')
          );
          const onTextListener = onSnapshot(q, (snapshot) => {
            const textArr = snapshot.docs.map((doc) => ({
              id: doc.id,
          ...doc.data(),
        }));
        setTexts(textArr);
      });
      
      return () => onTextListener();
    } else {
      history.push('/admin/MainLogin');
    }
  }, [history]);
  
  // 댓글가져오는 useEffect
  useEffect(() => {
    const q = query(
      collection(dbService, 'Comments'),
      orderBy('createdAt', 'asc')
      );
      const onCommentListener = onSnapshot(q, (querySnapshot) => {
        const commentsArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setComments(commentsArray);
      });
      return onCommentListener;
  }, []);

  const commentList = (textId) =>
  Comments.filter((comment) => comment.responseTo === textId);
  
  return (
    <div className="content">
      <div className="card">
        <Switch>
          {userObj ? (
            <>
              <BulletinTab
                userObj={userObj}
                texts={texts}
                commentList={commentList}
                notices={notices}
                noticeCommentList={noticeCommentList}
              />
            </>
          ) : (
            <Route>
              <Auth exact path="/auth" />
            </Route>
          )}
        </Switch>
      </div>
    </div>
  );
}

export default Bulletin;
