

export const FormateDate =(date)=>{

    const hour=new Date(date).getHours();
    const minites= new Date(date).getMinutes();
    return(`${hour < 10 ? '0' + hour : hour}:${minites < 10 ? '0' + minites : minites}`)
}

export const downLoadMedia =(e,ogurl) =>{
     e.preventDefault();
    try{
        fetch(ogurl)
        .then(res => res.blob())
        .then(blob =>{
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a')
            a.style.display = 'none';
            a.href=url

            const spliteName = ogurl.split('/');
            const DuplicatName = spliteName.pop();

            a.download = "" + DuplicatName + "";
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);


        }).catch(err => console.log('error while Downloading : ',err.message))

        

    }catch(err){
        console.log('error while Downloading : ',err.message)
    }

}

