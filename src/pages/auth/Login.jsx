import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonInput, IonButton, IonLabel, IonItem, IonToast } from '@ionic/react';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://192.168.100.3:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Something went wrong");
      }

      const data = await res.json();
      localStorage.setItem('user', JSON.stringify(data));
      setToastMessage("Logged in successfully");
      setShowToast(true);
      history.push('/landing');
    } catch (error) {
      setToastMessage(error.message);
      setShowToast(true);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <IonPage>
      <IonContent>
        <form onSubmit={handleSubmit}>
          <IonItem>
            <IonLabel>Username</IonLabel>
            <IonInput
              type="text"
              name="username"
              onIonChange={handleInputChange}
              value={formData.username}
            />
          </IonItem>
          <IonItem>
            <IonLabel>Password</IonLabel>
            <IonInput
              type="password"
              name="password"
              onIonChange={handleInputChange}
              value={formData.password}
            />
          </IonItem>
          <IonButton expand="full" type="submit">Login</IonButton>
        </form>
        <IonToast
          isOpen={showToast}
          message={toastMessage}
          onDidDismiss={() => setShowToast(false)}
          duration={2000}
        />
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;