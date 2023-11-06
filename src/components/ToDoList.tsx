import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { toDoSelector, toDoState } from "../Atoms";

import { CreateToDo } from "./CreataeToDo";
import { ToDo } from "./ToDo";

function ToDoList() {
  const [toDos, doing, done] = useRecoilValue(todoSelector);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <h2>To Do</h2>
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
    </div>
  );
}

// // }
// interface IForm {
//   email: string;
//   firstName: string;
//   password: string;
//   password1: string;
//   extraError?: string;
// }
// function ToDoList() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setError,
//   } = useForm<IForm>({
//     defaultValues: {
//       email: "@naver.com",
//     },
//   });
//   const onValid = (data: IForm) => {
//     if (data.password !== data.password1) {
//       return setError(
//         "password1",
//         { message: "password are not the same" },
//         { shouldFocus: true }
//       );
//     }
//     // setError("extraError", { message: "Server offline." });
//   };
//   console.log(errors);

//   return (
//     <div>
//       <form
//         style={{ display: "flex", flexDirection: "column" }}
//         onSubmit={handleSubmit(onValid)}
//       >
//         <input
//           {...register("email", {
//             required: "Email is required",
//             pattern: {
//               value: /^[A-Za-z0-9._%+-]+@naver.com$/,
//               message: "Please enter a valid email address",
//             },
//           })}
//           placeholder="Email"
//         />
//         <span>{errors?.email?.message as string}</span>
//         <input
//           {...register("firstName", {
//             required: "First Name",
//             validate: {
//               noSeop: (value) =>
//                 value.includes("seop") ? "no seop allowed" : true,
//               noNick: (value) =>
//                 value.includes("nick") ? "no nick allowed" : true,
//             },
//           })}
//           placeholder="First Name"
//         />
//         <span>{errors?.firstName?.message as string}</span>

//         <input
//           {...register("password", {
//             required: "write here",

//             minLength: {
//               value: 8,
//               message: "Your password is too short.",
//             },
//           })}
//           placeholder="Password"
//         />
//         <input
//           {...register("password1", {
//             required: "Password is required",
//             minLength: {
//               value: 5,
//               message: "Your password is too short.",
//             },
//           })}
//           placeholder="Password1"
//         />
//         <span>{errors?.password1?.message as string}</span>
//         <button>Add</button>
//         <span>{errors?.extraError?.message}</span>
//       </form>
//     </div>
//   );
// }

export default ToDoList;
