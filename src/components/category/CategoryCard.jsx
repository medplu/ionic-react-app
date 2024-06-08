import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonImg } from '@ionic/react';
import { useEffect, useState } from 'react';

const CategoryCard = ({ icon, title, description, onClick }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <IonCard 
      className={`${
        loaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 -translate-y-2'
      }`}
      onClick={() => onClick(title)}
    >
      <IonImg src={icon} alt={title} />
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonCardSubtitle>{description}</IonCardSubtitle>
      </IonCardContent>
    </IonCard>
  );
};

export default CategoryCard;