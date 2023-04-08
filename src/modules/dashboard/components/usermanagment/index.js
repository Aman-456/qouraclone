import React, { useEffect } from "react";
import ManagementTable from "./Table";
import { useDispatch } from "react-redux";
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
    <ManagementTable />
  );
}

export default UserManagement;
