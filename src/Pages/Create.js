import React, { Fragment, useContext } from 'react';
import Header from '../Components/Header/Header';
import Create from '../Components/Create/Create';
import { cntxtCmngFrmFldOprtn } from '../Helpers/Helpers';
import HumburgerMenu from '../Components/HumburgerMenu/HumburgerMenu'
import { Contextuser } from '../App';
const CreatePage = () => {
  const { setLoginStatus}= useContext(cntxtCmngFrmFldOprtn)
  const user = useContext(Contextuser)
  const LogedUserName=user.name
  return (
    <Fragment>
      <Header setLoginStatus={setLoginStatus}/>
      <HumburgerMenu LogedUserName={LogedUserName} setLoginStatus={setLoginStatus}/>
      <Create/>
    </Fragment>
  );
};

export default CreatePage;
