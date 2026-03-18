import { toast } from "react-toastify";

const getFromLocalStorage = () =>{
    const installApps = localStorage.getItem('installed');
    if (installApps) {
        return JSON.parse(installApps);
    }
    return [];
}

const saveToLocalStorage = id => {
    const installApps = getFromLocalStorage();
    if(installApps.includes(id)){
        toast('This app is already installed')
    }
    else{
        installApps.push(id)
    }

    const installAppsStr = JSON.stringify(installApps)
    localStorage.setItem('installed', installAppsStr)
}

const removeFromLocalStorage = id => {

    
    // console.log(installedApps);

    
    

    // newInstalledApps.map(singleId => saveToLocalStorage(singleId))
}


export {getFromLocalStorage, saveToLocalStorage, removeFromLocalStorage};