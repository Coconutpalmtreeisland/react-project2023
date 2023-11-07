import React from 'react'

const Contact = () => {
    return (
        <section id="contact">
            <div className="contact__inner">
                <h2 className="contact__title">Contact <em>연락</em></h2>
                <div className="contact__line" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className="contact__text">
                    <div className="text">
                        <div>
                            <a href="/">E-mail: adorableness1215@naver.com</a>
                        </div>
                    </div>
                </div>
                <div className="contact__line bottom" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
        </section>
    )
}

export default Contact