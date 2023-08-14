import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Cuide, Ame, Adote...</h1>
                        <hr />
                        <p>O Brasil tem 30 milhões de pets abandonados e esse número só aumenta. Por isso, a Pet Care se uniu a várias ONGs de proteção para aproximar você de cães e gatos de estimação.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md 5 d-flex justify-content-center">
                        <img src="https://media.discordapp.net/attachments/1138062582964551720/1140608146709160066/pexels-magali-guimaraes-12587411-removebg-preview_2.png?width=595&height=391" alt="Contact Us" height="300px" width="300px" />
                    </div>
                    <div className="col-md-6">
                        <form >
                            <h5>Envie suas informações...</h5>
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

                                <h5>Contato</h5>
                                <div className="quemsomos">
                    
                    <img src="https://media.discordapp.net/attachments/1138062582964551720/1140601704526659714/whatsapp.png?width=427&height=427" className='imgicones' alt="" width="40px" /> <p className='imgicones'> 11 94126-8702</p> 
                    
                    <img src="https://media.discordapp.net/attachments/1138062582964551720/1140601704199495710/chamada-telefonica.png?width=427&height=427" className='imgicones' alt="" width="40px" /> <p className='imgicones'>11 3294-0762</p>
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
