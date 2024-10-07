import React, { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export function DialogWithForm({ dialogOpen, handleOpenDialog }) {
  const handleOpen = () => handleOpenDialog(false);

  const MySwal = withReactContent(Swal);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const mailSend = (e) => {
    fetch("https://guprojects.gitam.edu/kautilya-admin/api/mailsend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle response data here
        if (data.status === "success") {
        } else {
        }
      });
  };

  const handleChanges = (e) => {
    const { name, value } = e.target;
    // Replace any characters that are not alphabets or spaces
    const sanitizedValue = value.replace(/[^a-zA-Z ]/g, "");
    // Update formData with sanitized value
    setFormData({ ...formData, [name]: sanitizedValue });
  };

  const handleChangeData = (e) => {
    const { name, value } = e.target;
    // Replace any characters that are not alphabets or spaces
    const sanitizedValue = value.replace(/[^0-9]/g, "");
    // Update formData with sanitized value
    setFormData({ ...formData, [name]: sanitizedValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Called Handle Submit");
    try {
      // Send the form data to the server
      const response = await fetch(
        "https://guprojects.gitam.edu/kautilya-admin/api/saverecruite",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      // Handle the server response
      const data = await response.json();
      setFormData({
        name: "",
        email: "",
        organisation: "",
        mobile: "",
      });
      // Show SweetAlert success message
      if (data.status == "success") {
        mailSend();
        MySwal.fire({
          icon: "success",
          title: "Success!",
          text: data.message,
        });
        document.querySelector(".swal2-container").style.zIndex = "999999";
      } else {
        MySwal.fire({
          icon: "error",
          title: "Error!",
          text: data.message,
        });
        document.querySelector(".swal2-container").style.zIndex = "999999";
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error and show SweetAlert error message if needed
      MySwal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to submit the form. Please try again.",
      });
      document.querySelector(".swal2-container").style.zIndex = "999999";
    }
  };

  return (
    <>
      <Dialog
        size="sm"
        open={dialogOpen}
        handler={handleOpen}
        className="bg-transparent"
      >
        <Card className="mx-auto w-full">
          <CardBody className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h4 className="text-xl font-semibold text-black">
                Recruiter Registration
              </h4>
              <span className="" onClick={handleOpen}>
                <XMarkIcon className="h-6 w-6 stroke-2.5" />
              </span>
            </div>

            <div className="py-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <Input
                    label="Name"
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChanges}
                  />
                </div>
                <div className="mb-4">
                  <Input
                    label="Organisation"
                    required
                    type="text"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleChanges}
                  />
                </div>

                <div className="mb-4">
                  <Input
                    label="Email ID"
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <Input
                    label="Mobile"
                    required
                    type="text"
                    minLength="10"
                    maxLength="10"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChangeData}
                  />
                </div>
                <div className="text-center mt-6">
                  <Button type="submit">Submit</Button>
                </div>
              </form>
            </div>
          </CardBody>
        </Card>
      </Dialog>
    </>
  );
}
