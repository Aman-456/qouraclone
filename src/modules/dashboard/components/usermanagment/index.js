import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import UserTableWrapper from "../../../../common/Tables";
import { hideLoader, showLoader } from "../../../../Store/Features/LoaderSlice";

function UserManagement() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showLoader("content"));
    let timeout = setTimeout(() => {
      dispatch(hideLoader("content"));
    }, 300);

    return () => {
      dispatch(hideLoader("content"));
      clearTimeout(timeout);
    };
  }, [dispatch]);
  return (
    <UserTableWrapper status="user" text={"USERS"} />
  )
}

export default UserManagement;
