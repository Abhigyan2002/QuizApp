import React from "react";

function Contact() {
  return (
    <div className="container">
      <h2 className="my-3">Contact Us</h2>
      <div className="d-flex justify-content-start" style={{width:'fit-content'}}>
        <table className="table table-primary table-bordered">
          <thead className="text-center">
            <tr>
              <th>Email</th>
              <th>Phone No</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td className="p-2">abhigyan.chak2002@gmail.com</td>
              <td className="p-2">+91 9875323461</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Contact;
