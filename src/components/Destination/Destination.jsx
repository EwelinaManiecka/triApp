import Wiena1 from "../assets/h4-wien-opera.jpg";
import Wiena2 from "../assets/h9-wien-panoramic.jpg";



const Destination = ( ) => {
    return (
        <div className="destintion">
            <h1>Popular destintion</h1>
            <p>Tours give yoy the opportunity to see  lot, within a time frme.</p>
            <div className="firstDescr">
                <div className="textDescr">
                    <h2>Wiena, Austria</h2>
                    <p>Opis Wiednia po angielsku</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam blanditiis animi, voluptate nobis nisi corrupti suscipit quisquam cumque commodi nam aliquam porro incidunt tempora ratione. A nobis asperiores possimus placeat.</p>
                </div>
                <div className="image">
                    <img alt="" src={Wiena1} />
                    <img alt="" src={Wiena2} />
                </div>
            </div>
        </div>
    )
}

export default Destination;