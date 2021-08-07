import React from 'react'
import Flower from "../../../util/images/Flower.png"
import { deleteSavedApod } from '../../../util/API/API';
import { Link } from "react-router-dom"

function Nav(props) {

    const { navText, alignText, imageDetailsPageCondition } = props;

    const handleApodDelete = () => {

        deleteSavedApod()
        

    };

    function NavHeader() {
        return (

            <div className={`container-fluid navItems ${alignText}`} >
                <span className="navbar-brand d-flex">
                    <img
                        src={Flower}
                        alt="Flower"
                        width="53"
                        height="50"
                        className="d-inline-block " />
                    <h2 className="universeText">
                        {navText}
                    </h2>

                </span>
            </div>
        )
    };

    function DeleteApodHeader() {
        return (

            <div className={`container-fluid navItems ${alignText}`} onClick={() => handleApodDelete()}>
                <span className="navbar-brand d-flex">
                    <img
                        src={Flower}
                        alt="Flower"
                        width="53"
                        height="50"
                        className="d-inline-block " />
                    <h2 className="universeText">
                        {navText}
                    </h2>

                </span>
            </div>
        )

    }

    return (

        <nav className="navbar navbar-dark bg-dark d-flex ">
            {imageDetailsPageCondition ? <NavHeader /> :

                <Link to="/apodImages">
                    <DeleteApodHeader

                    />
                </Link>

            }

        </nav>

    );
}

export default Nav;