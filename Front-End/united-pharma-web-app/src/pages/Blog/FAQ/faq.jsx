import React, { useState } from "react";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import AskQuestionForm from "./AskQuestionForm";

export default function StaticFaqSection() {
  const [editableContent, setEditableContent] = useState({
    question: "How can I view my order history?",
    answer:
      "Your complete order history is available in your account. Log in, go to the order history section, and you'll find a detailed list of your past orders, including order dates and status.",
  });

  const handleEdit = (field, value) => {
    setEditableContent({
      ...editableContent,
      [field]: value,
    });
  };

  return (
    <MDBContainer>
      <section>
        <div className="d-flex justify-content-between align-items-center mb-4 mt-3 ">
          <Link to="/" type="button" className="btn btn-success w-25 p-1">
            <MDBIcon icon="home" />
            Home
          </Link>

          <Link to="/blogs" type="button" className="btn btn-success w-25 p-1">
            <MDBIcon icon="blogger-b" />
            Blogs
          </Link>
        </div>
        <MDBTypography
          tag="h1"
          className="text-center mb-4 mt-5 pb-2 text-primary fw-bold"
        >
          FAQ
        </MDBTypography>
        <p className="text-center mb-5">
          Find the answers for the most frequently asked questions below
        </p>

        <MDBRow>
        <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-success">
              <MDBIcon  icon="stethoscope text-success pe-2" /> How do I order prescription medication?
            </MDBTypography>
            <p>
              You can easily order prescription medication through our online platform. Simply browse our catalog, add the required items to your cart, and follow the checkout process. Make sure to provide accurate prescription details during the ordering process.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-success">
              <MDBIcon  icon="shield text-success pe-2" /> Is my personal information secure?
            </MDBTypography>
            <p>
              <strong>
                <u>Yes, absolutely!</u>
              </strong>{" "}
              We prioritize the security of your personal information. Our platform uses advanced encryption and security measures to ensure the confidentiality and integrity of your data.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-success">
              <MDBIcon  icon="calendar text-success pe-2" /> How long does it take to receive my order?
            </MDBTypography>
            <p>
              We strive to process and ship orders promptly. The delivery time may vary based on your location and the chosen shipping method. You can track your order status through your account.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-success">
              <MDBIcon  icon="comment text-success pe-2" /> Can I consult with a pharmacist online?
            </MDBTypography>
            <p>
              Yes, we offer online consultations with licensed pharmacists. You can chat with a pharmacist, ask questions about medications, and get professional advice from the comfort of your home.
            </p>
          </MDBCol>

          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-success">
              <MDBIcon icon="history text-success pe-2" /> How can I view my order history?
            </MDBTypography>
            <div>
              <p>
                {editableContent.answer}{" "}
                <MDBBtn
                  className={editableContent.editing ? "bg-warning" : "bg-primary"}
                  size="sm"
                  onClick={() => handleEdit("editing", !editableContent.editing)}
                >
                  {editableContent.editing ? "Save" : "Edit"}
                </MDBBtn>
              </p>
              {editableContent.editing && (
                <textarea
                  className="form-control"
                  rows="3"
                  value={editableContent.answer}
                  onChange={(e) => handleEdit("answer", e.target.value)}
                ></textarea>
              )}
            </div>
          </MDBCol>

          {/* ... (same as before) */}
        </MDBRow>
      </section>
      
    </MDBContainer>
  );
}
