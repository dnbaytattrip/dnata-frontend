// import { useField, ErrorMessage } from "formik";

// function TextField({ label, ...props }) {
//   const [field, meta] = useField(props);

//   return (
//     <div className="mb-2">
//       <label htmlFor={field.name}>{label}</label>
//       <div className="my-2 relative">
//         <input
//           className="p-2 w-full outline-none border border-slate-300 focus:border-custom-blue3"
//           id={field.name}
//           {...field}
//           {...props}
//         />
//         <p className="absolute -bottom-4 text-red-600 text-xs">
//           <ErrorMessage name={field.name} />
//         </p>
//       </div>
//     </div>
//   );
// }

// export default TextField;

import { ErrorMessage, Field } from "formik";

function TextField({ label, name, type }) {
  return (
    <div className="mb-2">
      <label htmlFor={name}>{label}</label>
      <div className="my-2 relative">
        <Field
          className="p-2 w-full outline-none border border-slate-300 focus:border-custom-blue3"
          id={name}
          name={name}
          type={type}
        />
        <p className="absolute -bottom-4 text-red-600 text-xs">
          <ErrorMessage name={name} />
        </p>
      </div>
    </div>
  );
}

export default TextField;
