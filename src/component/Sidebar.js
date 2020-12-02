import thumbs from "../img/thumbs.jpg"



function Sidebar() {

    return (
        <div>

            <div className="category">
                <h3>Top Charts</h3>
                <div className="m-thumbs">
                    <div className="top_charts">
                        <div className="thumbs_holder">

                            {/*image-thumbnail start*/}
                            <div className="thumbs">
                                <img src={thumbs} alt="thumbs" />
                                <div>
                                    <h4><a href="/">Title of Songs</a></h4>
                                    <p>Artist Name</p>
                                </div>
                            </div>
                            {/*image-thumbnail ends*/}

                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
export default Sidebar;