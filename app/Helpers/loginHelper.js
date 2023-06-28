import { Keyboard } from "react-native";

export const login = async (username, password, setNotification, setIsVisible, navigate) => {
    Keyboard.dismiss();

    // if(!username && !password) {
    //     setNotification('Falta llenar los campos');
    //     setIsVisible('error');
    //     setTimeout(() => {
    //         setIsVisible('');
    //     },3000);
    //     return null;
    // }else if(username && !password) {
    //     setNotification('Falta llenar la contraseña');
    //     setIsVisible('error');
    //     setTimeout(() => {
    //         setIsVisible('');
    //     },3000);
    //     return null;
    // }else if(!username && password) {
    //     setNotification('Falta llenar el usuario');
    //     setIsVisible('error');
    //     setTimeout(() => {
    //         setIsVisible('');
    //     },3000);
    //     return null;
    // }

    // try {
    //     const response = await fetch(`http://192.168.0.3:8080/api/user/find/${username}`);
    //     const json = await response.json();
    //     if(json.password === password){
    //         setNotification('Se ha validado correctamente');
    //         setIsVisible('good');
    //         setTimeout(() => {
    //             setIsVisible('');
    //             navigate('menu',{username});
    //         },3000);
    //     }else{
    //         setNotification('Contraseña incorrecta');
    //         setIsVisible('error');
    //         setTimeout(() => {
    //             setIsVisible('');
    //         },3000);
    //     }
    // }catch (error) {
    //     console.error(error);
    // }


    setNotification('Se ha validado correctamente');
    setIsVisible('good');
    setTimeout(() => {
        setIsVisible('');
        navigate('menu', { username });
    }, 100);

    return null;
}