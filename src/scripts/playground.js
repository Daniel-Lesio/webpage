const playground = () => {

    const Clown = ()=>{
        return new Promise((resolve) => {
            setTimeout(()=>{
                resolve('🤡');
            },4000)
        })
    }
    async function msg(){
        const msg = await Clown();
        console.log(msg) 
    }
    msg()

}
export default playground;