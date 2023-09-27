import { useNavigation } from "react-router-dom";
function SubmitBtn({ text }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <button className="btn btn-primary btn-block" defaultChecked={isSubmitting}>
      {isSubmitting ? (
        <>
          <span className="loading loading-spinner"></span> Loading...
        </>
      ) : (
        text
      )}
    </button>
  );
}

export default SubmitBtn;
