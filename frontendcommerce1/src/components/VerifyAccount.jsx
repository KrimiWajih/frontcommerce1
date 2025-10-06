import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function VerifyAccount() {
  const data = useLoaderData();
  const navigate = useNavigate();

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center text-gray-600 text-xl">Please verify your account</div>
      </div>
    );
  }

  if (data?.Msg === "Account verified successfully!") {
    toast.success(data.Msg);
    setTimeout(() => navigate("/"), 2000);
  } else {
    toast.error("Verification failed.");
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className={`text-center text-xl ${data?.Msg ? "text-green-600" : "text-gray-600"}`}>
        {data?.Msg ? "Successfully Verified." : "Please verify your account"}
      </div>
    </div>
  );
}

export default VerifyAccount;
