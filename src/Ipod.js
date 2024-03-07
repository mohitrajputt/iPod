import { Component } from "react";
import styles from "./Ipod.module.css";
import AudioPlayer from "./AudioPlayer";

class Ipod extends Component {
    constructor() {
        super();
        this.state = {
            coverFlowView: false,
            musicView: false,
            gameView: false,
            settingView: false,
            musicControler: false,
            selectedItem: 1,
            playNow: false
        }
    }

    handleCoverFlowView = () => {
        const { coverFlowView } = this.state;
        this.setState({
            coverFlowView: !coverFlowView
        })
    }

    handleMusicView = () => {
        const { musicView } = this.state;
        this.setState({
            musicView: !musicView
        })
    }

    handleGameView = () => {
        const { gameView } = this.state;
        this.setState({
            gameView: !gameView
        })
    }

    handleSettingView = () => {
        const { settingView } = this.state;
        this.setState({
            settingView: !settingView
        })
    }

    handleMusicControler = () => {
        const { musicControler } = this.state;
        this.setState({
            musicControler: !musicControler
        })
    }

    handleBack = () => {
        this.setState({
            musicView: false, gameView: false, settingView: false, coverFlowView: false, musicControler: false
        })
        this.setState({ selectedItem: 1 });
    }

    onItemClick = (item) => {
        this.setState({ selectedItem: item });
    };

    handleSelect = () => {
        if (this.state.selectedItem === 1) {
            this.handleCoverFlowView();
        }
        else if (this.state.selectedItem === 2) {
            this.handleMusicView();
        }
        else if (this.state.selectedItem === 3) {
            this.handleGameView();
        }
        else if (this.state.selectedItem === 4) {
            this.handleSettingView();
        }
        else {
            this.handleMusicControler();
        }
        this.setState({ selectedItem: 5 });
    }

    handlePrev = () => {
        this.setState(prevState => ({
            selectedItem: prevState.selectedItem === 1 ? 4 : prevState.selectedItem - 1
        }));
    }

    handleNext = () => {
        this.setState(prevState => ({
            selectedItem: prevState.selectedItem === 4 ? 1 : prevState.selectedItem + 1
        }));
    }

    handleMusic = () => {
        this.setState({ playNow: !this.state.playNow });
    }

    render() {
        const { coverFlowView, musicView, gameView, settingView, musicControler, selectedItem, playNow } = this.state;
        return (
            // Ipod body
            <main className={styles.IpodBody} >
                {/* Display */}
                <div className={styles.IpodDisplay} >
                    {/* Menu bar */}
                    <div className={styles.IpodMenu} >
                        {/* Menu Header */}
                        <div className={styles.IpodHeader} >
                            <h3>iPod.js</h3>
                        </div>
                        {/* Menu List */}
                        <ul className={styles.IpodListItems} >
                            <li
                                onDoubleClick={this.handleCoverFlowView} onClick={() => this.onItemClick(1)}
                                className={selectedItem === 1 ? "highlight" : ""}
                            >Cover Flow <span id={styles.more} >&#10148;</span> </li>
                            <li
                                onDoubleClick={this.handleMusicView} onClick={() => this.onItemClick(2)}
                                className={selectedItem === 2 ? "highlight" : ""}
                            >Music <span id={styles.more} >&#10148;</span> </li>
                            <li
                                onDoubleClick={this.handleGameView} onClick={() => this.onItemClick(3)}
                                className={selectedItem === 3 ? "highlight" : ""}
                            >Games <span id={styles.more} >&#10148;</span> </li>
                            <li
                                onDoubleClick={this.handleSettingView} onClick={() => this.onItemClick(4)}
                                className={selectedItem === 4 ? "highlight" : ""}
                            >Settings <span id={styles.more} >&#10148;</span> </li>
                        </ul>
                    </div>

                    {/* Cover Flow */}
                    <div className={styles.IpodCoverFlow} id={coverFlowView ? "visible" : "hidden"} >
                        <div>Cover Flow</div>
                        <span onClick={this.handleBack} className={styles.back} >&#8629;</span>
                    </div>

                    {/* Music */}
                    <div className={styles.IpodMusics} id={musicView ? "visible" : "hidden"} >
                        {/* Music player */}
                        <div className={styles.IpodMenu} >
                            {/* Music Header */}
                            <div className={styles.IpodHeader} >
                                <h3>Music</h3>
                            </div>
                            {/* Music List */}
                            <ul className={styles.IpodListItems} >
                                <li
                                    onDoubleClick={this.handleMusicControler}
                                    className={selectedItem === 5 ? "highlight" : ""}
                                    onClick={() => this.onItemClick(5)}
                                >All Songs <span id={styles.more} >&#10148;</span> </li>
                                <li
                                    className={selectedItem === 6 ? "highlight" : ""}
                                    onClick={() => this.onItemClick(6)}
                                >Artists <span id={styles.more} >&#10148;</span> </li>
                                <li
                                    className={selectedItem === 7 ? "highlight" : ""}
                                    onClick={() => this.onItemClick(7)}
                                >Albums <span id={styles.more} >&#10148;</span> </li>
                            </ul>
                        </div>
                        <span onClick={this.handleBack} className={styles.back} >&#8629;</span>
                    </div>

                    {/* Inside music */}
                    <div className={styles.musicPlayer} id={musicControler ? "visible" : "hidden"} >
                        <div className={styles.musicContent} >
                            <div className={styles.musicImage} >
                                <img src="devdas.webp" alt="devdas" />
                            </div>
                            <div className={styles.aboutMusic} >
                                <h4>Silsila ye ...</h4>
                                <p>Shreya Ghoshal</p>
                            </div>
                        </div>
                        {musicControler ? <AudioPlayer src="Devdas - Silsila ye chahat ka.mp3" playNow={playNow} /> : <></>}
                        <span onClick={this.handleBack} className={styles.close} >&#10060;</span>
                    </div>


                    {/* Games */}
                    <div className={styles.IpodGames} id={gameView ? "visible" : "hidden"} >
                        <div className={styles.gameContainer} >
                            <img src="game.png" width="50px" alt="Games" />
                        </div>
                        <span onClick={this.handleBack} className={styles.back} >&#8629;</span>
                    </div>

                    {/* Settings: */}
                    <div className={styles.IpodSetting} id={settingView ? "visible" : "hidden"} >
                        <div className={styles.imgContainer} >
                            <img src="settings.png" width="50px" alt="Settings" />
                        </div>
                        <span onClick={this.handleBack} className={styles.back} >&#8629;</span>
                    </div>

                </div>

                <div className={styles.controller} >
                    <div className={styles.rotateCircle} >
                        <button className={styles.selectButton} onClick={this.handleSelect} ></button>
                        <button className={styles.menuButton} onClick={this.handleBack} ></button>
                        <button className={styles.previousButton} onClick={this.handlePrev} ></button>
                        <button className={styles.nextButton} onClick={this.handleNext} ></button>
                        <button className={styles.playPauseButton} onClick={this.handleMusic}  ></button>
                    </div>
                </div>
            </main>
        )
    }
}

export default Ipod;
