import ImgBox from "@/components/modules/assets/ImgBox/ImgBox"

const WorkSample = () => {

    return (
        <article className="worksample__main">
            <h2 className="worksample__title">Portfolio review</h2>
            <nav className="worksample__nav">
                <ul className="worksample__ul">
                    <li className="worksample__li">All</li>
                    <li className="worksample__li">Branding</li>
                    <li className="worksample__li">Print</li>
                    <li className="worksample__li">Photography</li>
                    <li className="worksample__li">Products</li>
                </ul>
            </nav>

            <section className="worksample__picture">
                <ImgBox srcImg={'work-sample-6.png'} titleHover={'website Sale Computer'} textHover={'Orders'} />
                <ImgBox srcImg={'work-sample-3.jpg'} titleHover={'website Stars'} textHover={'work sample'} />
                <ImgBox srcImg={'work-sample-4.png'} titleHover={'website Movies'} textHover={'Products'} />
                <ImgBox srcImg={'work-sample-2.png'} titleHover={'website MusicPlayer'} textHover={'Photography'} />
                <ImgBox srcImg={'work-sample-5.jpg'} titleHover={'website Personal'} textHover={'Cpourses'} />
                <ImgBox srcImg={'work-sample-1.png'} titleHover={'website Free Course'} textHover={'Branding'} />
            </section>

        </article>
    )
}

export default WorkSample