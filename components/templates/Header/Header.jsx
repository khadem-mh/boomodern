import Typewriter from 'typewriter-effect';

const Header = () => {

    return (
        <header className="header__parent">

            <div className='header__video-src'>
                <video src="videos/header.mp4" loop autoPlay muted></video>
                <div className='header__wave'>
                    <svg
                        fill="#fff"
                        preserveAspectRatio="none"
                        viewBox="0 0 1000 300"
                    >
                        <path d="M1000 299l2-279C847-16 692 155 587 184c-102.64 28.35-149-32-232-31-80 1-142 53-229 80-65.54 20.34-101 15-126 11.61V299z"></path>
                        <path d="M1000 286l2-252C845-9 700 178 597 212c-101.11 33.38-159-47-242-46-80 1-145.09 54.07-229 87-65.21 25.59-104.07 16.72-126 10.61V286z"></path>
                        <path d="M1000 300l1-230.29C784 57 700.53 198.86 597 226c-103 27-174-30-257-29-80 1-130.09 37.07-214 70-61.23 24-108 15.61-126 10.61V300z"></path>
                    </svg>
                </div>
            </div>

            <div className='header__front'>
                <div className='header__writer-text'>
                    <h1> Building sites </h1>
                    <Typewriter
                        onInit={typeWriter => {
                            typeWriter
                                .typeString('modern')
                                .start()
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString('fast')
                                .start()
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString('powerful')
                                .start()
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString('creative')
                                .start()
                                .pauseFor(2000)
                                .deleteAll()
                        }}
                        options={{
                            loop: true
                        }}
                    />
                </div>

                <h2>Create your ideal sites without needing coding skills.</h2>
                <button>Get Started for Free</button>

            </div>

        </header>
    )
}

export default Header