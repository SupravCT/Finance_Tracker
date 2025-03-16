import React, { useState } from "react";
import { AiOutlineLock } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { changePassword } from "../services/users/userServices";

const validationSchema = Yup.object({
  password: Yup.string()
    .min(5, "Current password must be at least 5 characters long")
    .required("Current password is required"),
  newPassword: Yup.string()
    .min(5, "New password must be at least 5 characters long")
    .required("New password is required"),
});

const UpdatePassword = () => {
  const { mutateAsync, isPending, isError, error, isSuccess } = useMutation({
    mutationFn: changePassword,
    mutationKey: ["change password"],
  });

  const formik = useFormik({
    initialValues: {
      password: "",
      newPassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await mutateAsync(values);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="text-lg font-semibold mb-4">Change Your Password</h2>
      <form onSubmit={formik.handleSubmit} className="w-full max-w-xs">
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="password">
            Current Password
          </label>
          <div className="flex items-center border-2 py-2 px-3 rounded">
            <AiOutlineLock className="text-gray-400 mr-2" />
            <input
              id="password"
              type="password"
              name="password"
              {...formik.getFieldProps("password")}
              className="outline-none flex-1"
              placeholder="Enter current password"
            />
          </div>
          {formik.touched.password && formik.errors.password && (
            <span className="text-xs text-red-500">
              {formik.errors.password}
            </span>
          )}
        </div>

        
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-2"
            htmlFor="newPassword"
          >
            New Password
          </label>
          <div className="flex items-center border-2 py-2 px-3 rounded">
            <AiOutlineLock className="text-gray-400 mr-2" />
            <input
              id="newPassword"
              type="password"
              name="newPassword"
              {...formik.getFieldProps("newPassword")}
              className="outline-none flex-1"
              placeholder="Enter new password"
            />
          </div>
          {formik.touched.newPassword && formik.errors.newPassword && (
            <span className="text-xs text-red-500">
              {formik.errors.newPassword}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={isPending}
        >
          {isPending ? "Updating..." : "Update Password"}
        </button>

        {isSuccess && <p className="text-green-500 mt-2">Password updated successfully!</p>}
        {isError && <p className="text-red-500 mt-2">{error?.message || "Something went wrong"}</p>}
      </form>
    </div>
  );
};

export default UpdatePassword;
