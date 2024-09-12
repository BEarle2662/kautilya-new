import Image from "next/image";
import { useState } from "react";
import Swal from "sweetalert2";
import alumniMainImg from "../../../public/assets/img/alumni/Web-Desktop-Creatives-29-scaled.jpg";

import withReactContent from "sweetalert2-react-content";

import { apisBasePath } from "@/Endpoints/apisBase";

import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Input,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const AlumniRegisterForm = () => {
  const MySwal = withReactContent(Swal);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    designation: "",
    sector: "",
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    try {
      // Send the form data to the server
      const response = await fetch(apisBasePath.savealumniassociation, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Handle the server response
      const data = await response.json();
      setFormData({
        name: "",
        email: "",
        mobile: "",
        city: "",
        designation: "",
        sector: "",
      });
      // Show SweetAlert success message
      if (data.status == "success") {
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
    <div>
      <Image
        src={alumniMainImg}
        width={0}
        height={0}
        alt="alumniMainImg"
        className="mb-8 md:mb-16 mt-8"
        onClick={handleShow}
      />
      <Dialog
        size="sm"
        open={show}
        // handler={handleOpen}
        className="bg-transparent shadow-none"
        onClose={handleClose}
      >
        <Card className="mx-auto">
          <form onSubmit={handleSubmit}>
            <CardBody className="gap-6">
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-base font-medium md:text-2xl md:font-semibold text-black">
                  Alumni Association
                </h1>
                <span className="!cursor-pointer" onClick={handleClose}>
                  <XMarkIcon className="h-4 w-4 md:h-6 md:w-6 stroke-2.5" />
                </span>
              </div>
              <div className="grid md:grid-cols-12 gap-6">
                <div className="md:col-span-12">
                  <Input
                    label="Full Name"
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="md:col-span-6">
                  <Input
                    label="Email ID"
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="md:col-span-6">
                  <Input
                    label="Mobile"
                    required
                    type="text"
                    minLength="10"
                    maxLength="10"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                </div>
                <div className="md:col-span-6">
                  <Input
                    label="Current City"
                    required
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>

                <div className="md:col-span-6">
                  <Input
                    label="Current Designation"
                    required
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                  />
                </div>
                <div className="md:col-span-6">
                  <Input
                    label="Sector"
                    required
                    type="text"
                    name="sector"
                    value={formData.sector}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </CardBody>
            <CardFooter className="pt-0 text-center">
              <Button type="submit">Submit</Button>
            </CardFooter>
          </form>
        </Card>
      </Dialog>
    </div>
  );
};

export default AlumniRegisterForm;

//  "https://guprojects.gitam.edu/kautilya-admin/api/savealumniassociation"
