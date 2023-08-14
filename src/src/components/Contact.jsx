import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1 className="text-dark fw-bold mb-4">Tem alguma dúvida?</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md 5 d-flex justify-content-center">
                        <img src="https://th.bing.com/th/id/R.f818819438d72f3a4469dffbbf7cb8dd?rik=RzTJAfozhmjH%2bg&riu=http%3a%2f%2fsintec.net.br%2fparticular%2fnbs9mt2gm7l%2farquivos%2fbonecocontadoronline.gif&ehk=tBg3%2bTpwdkkpDMOa3l8PWzPYNSvwJIAEdPaJr8smwLc%3d&risl=&pid=ImgRaw&r=0" alt="Contact Us" height="300px" width="300px" />
                    </div>
                    <div className="col-md-6">
                        <form >
                            <div class="mb-3">
                                <label for="exampleForm" class="form-label">Nome completo</label>
                                <input type="text" class="form-control" id="exampleForm" placeholder="nome completo"/>
</div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="nome@gmail.com"/>
</div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Comentário</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="digite um comentário"></textarea>
                                </div>
                                <button type="submit" class="btn btn-outline-primary">Enviar</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
            )
}

            export default Contact
