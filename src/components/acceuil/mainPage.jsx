/* carrousel  description  membre bureau  partnaires */
import React from 'react'
import Myphoto from "../../images/photo.jpg"
import Members from "./membersTemplate"

const MainPage = () => {

    const membersb=[{img:"https://i.pinimg.com/236x/8f/e2/0c/8fe20c9d58e343b9945c890bb0d081a2.jpg",name:"Mouna Haddar", func:"Presidente",category:"bureau"},{img:"http://comunidadpnacc.com/wp-content/uploads/2019/03/profile_mujer-1.jpg",name:"Tharwa Ellouze", func:"Trésorier",category:"bureau"},
    {img:"https://em.wattpad.com/f87853a479a4fb6dde063cdc156202073a1f30a5/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f334e626a2d69614144426a3152673d3d2d3438393239393138392e313466326538346338643466666661333434313535353233313034372e6a7067?s=fit&w=720&h=720",name:"Massara Keskes", func:"Resp. logistique",category:"bureau"},{img:"http://www.cpas-soignies.be/~cpassoig/images/CPAS/Icones/Avatar-Women.jpg",name:"Yomna Driss", func:"Resp. Media",category:"bureau"}]
        
    const membersp=[{img:"https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/1908042_776634105759736_3826318214673908032_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=MfiBaDXDIIUAX_hbnMI&_nc_ht=scontent.ftun3-1.fna&oh=f3889e6c15d2bc49a794257205a3b768&oe=5FE263E1",name:" ", func:" ", category:"partnaire"},{img:"https://weechookeong.files.wordpress.com/2012/07/ndi-logo.jpg",name:" ", func:" ",category:"partnaire"}]
        
    
    return ( 
        <div>
            <section className="carroussell">
                
                <img src={Myphoto} alt="groupes"/>
            </section>

            <section className="description">
               <strong>  جمعية تصورات و كفاءات لاجل التماسك الاجتماعي هي جمعية
                    تهدف الى المساهمة في تطوير قدرات الجمعيات</strong>
            </section>

            <section className="members">
                <h1>Membre Bureau D'association</h1>
                <Members members={membersb} />
            </section>

            <section className="partnaires">
                <h1>Nos partnaires</h1>
                <Members members={membersp} />
            </section>

        </div>
     );
}  
export default MainPage;