import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./MealPlanOutput.css";
import { AnimatePresence, motion } from "framer-motion";
import background from "../../resources/backgroundeight.jpeg";

const MealPlanOutput = () => {
  const data = useSelector((state: any) => state.dataCollect);
  const [bulletPoints, setBulletPoints] = useState([]);
  const [emailAddress, setEmailAddress] = useState("");
  const [successMessage, setSuccessMessage] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  const refreshPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    const body = {
      age: data.age,
      currentWeight: data.currentWeight,
      dailyCalorieIntake: data.dailyCalorieIntake,
      dailyProteinIntake: data.dailyProteinIntake,
      gender: data.gender,
      howActive: data.howActive,
      pathChoice: data.pathChoice,
      selectedCuisine: data.selectedCuisine,
      selectedMeal: data.selectedMeal,
      selectedPlan: data.selectedPlan,
      weightMeasurement: data.weightMeasurement,
      dietaryPreferences: data.dietaryPreferences,
    };

    fetch("http://localhost:3001/createMealPlan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((response) => {
        setBulletPoints(response.message.split("\n"));
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [data]);

  const handleEmailSubmit = async (e: any) => {
    e.preventDefault();
    const body = {
      data: bulletPoints,
      email: emailAddress,
    };

    setSuccessMessage({
      message: "Loading",
    });

    fetch("https://nutriplanapi-production.up.railway.app/emailSubmit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSuccessMessage(data);
        setEmailAddress("");
      })
      .catch((error) => console.error(error));
  };

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className='LoadingContainer'>
          <div className='loader'></div>
          <p>Your meal plan is loading! This will only take a minute</p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className='MealPlanContainer'>
          <div className='LeftSide'>
            <h1>Your meal plan!</h1>
            {bulletPoints.map((bulletPoint, index) => (
              <p className='bulletPoints' key={index}>
                {bulletPoint}
              </p>
            ))}
            <div className='sendByEmail'>
              <h3 className='sendEmailTitle'>
                Would you like us to send you this meal plan to your email
                address?
              </h3>
              <p className='emailText'>
                If so, simply enter your email below and it'll be sent to you in
                an instant!
              </p>
              <form className='emailForm' onSubmit={handleEmailSubmit}>
                <input
                  className='emailInput'
                  type='email'
                  onChange={(event) => setEmailAddress(event.target.value)}
                  placeholder='Enter your email address'
                />
                <button
                  className='submitButton'
                  disabled={
                    !emailAddress || successMessage.message === "Loading"
                  }>
                  Submit
                </button>
              </form>
              {successMessage?.message === "Loading" ? (
                <p className='smallText'>
                  Sending your meal plan please wait..
                </p>
              ) : successMessage?.message === "Success" ? (
                <p className='smallTextSuccess'>
                  Your meal plan has sent succesfully!
                </p>
              ) : successMessage?.message ? (
                <p className='smallTextError'>
                  There has been an error sending your email, please try another
                  email address
                </p>
              ) : (
                <p className='smallText'>
                  (Check your junk or spam folders if it doesn't appear in your
                  inbox right away!)
                </p>
              )}
            </div>
            <div className='ButtonGroup'>
              <button onClick={refreshPage} className='Button'>
                Start Again!
              </button>
            </div>
          </div>
          <div className='RightSide'>
            <img className='RightSideImage' src={background} alt='background' />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MealPlanOutput;
