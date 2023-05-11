import AppRouter from '../components/login/Router';
import Loader from '../components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authService } from '../Loginbase';
import { updateProfile } from '@firebase/auth';
import { SET_USER } from '../actions';
import { setInitAction } from '../actions';

function MainLogin(props) {
  const dispatch = useDispatch();
  const init = useSelector((state) => state.init);
  const userObj = useSelector((state) => state.userObj);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: SET_USER,
          payload: {
            displayName: user.displayName,
            uid: user.uid,
            photoURL: user.providerData[0].photoURL || null,
            email: user.providerData[0].email || null,
            updateProfile: (args) =>
              updateProfile(user, { displayName: user.displayName }),
          },
        });
      } else {
        dispatch({ type: SET_USER, payload: null });
      }
      dispatch(setInitAction(true));
    });
  }, [dispatch]);

  return (
    <>
      {init ? (
        <AppRouter isLoggedIn={Boolean(userObj)} userObj={userObj} />
      ) : (
        <Loader />
      )}
    </>
  );
}

export default MainLogin;
