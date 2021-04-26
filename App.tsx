import AppLoading from 'expo-app-loading';
import React, { useEffect } from 'react';
import Routes from './src/routes';
import * as Notifications from 'expo-notifications';
import { PlantProps } from './src/libs/storage';
import { Jost_400Regular, Jost_600SemiBold, useFonts } from '@expo-google-fonts/jost'; 

export default function App() {

  //Importar as fontes na raiz do aplicativo para poder usar em qualquer lugar
  const [ fontsLoaded ] = useFonts({ Jost_400Regular, Jost_600SemiBold });

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      async notification => {
        const data = notification.request.content.data.plant as PlantProps;
        console.log(data);        
      }
    );
    return () => subscription.remove();

    // async function notifications() {
    //   const data = await Notifications.getAllScheduledNotificationsAsync();
    //   console.log("############### NOTIFICAÇÕES AGENDADAS ###############");
    //   console.log(data);      
    // }
    // notifications();
  }, []);

  //Mostrar o Loading enquanto as fontes estão carregando
  if (!fontsLoaded) 
    return <AppLoading />

  return (
    <Routes />
  )
}