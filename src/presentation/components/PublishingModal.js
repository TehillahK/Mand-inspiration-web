function SelfPublishing(){
    return(
        <div>
                        <h4>Self-Publishing</h4>
                                 <div>
                             <h6>Editing (Copy Editing, Developmental editing, Proof reading and manuscript critique)</h6>
                             <ol style={{width:"25rem"}}>
                                 <li className="d-flex justify-content-between">
                                     <p>9000 words or less</p>
                                     <p>$60</p>
                                 </li>
                                 <li className="d-flex justify-content-between">
                                     <p>9000 words to 60 000</p>
                                     <p>$120</p>
                                 </li>
                                 <li className="d-flex justify-content-between">
                                     <p>60000 words or more</p>
                                     <p>$180</p>
                                 </li>
                             </ol>
                         </div>
                         <div>
                             <h6>Design</h6>
                             <ol style={{width:"25rem"}}>
                                 <li className="d-flex justify-content-between">
                                     <p>Cover design</p>
                                     <p>$30</p>
                                 </li>
                                 <li className="d-flex justify-content-between">
                                     <p>Interior book design</p>
                                     <p>$15</p>
                                 </li>
                             </ol>
                         </div>
        </div>
    )
}

function Services(){
    return(
        <ol className="container">
            <li className="d-flex flex-column">
                <h5>Inspire Lite Package (Starting at $1200)</h5>
                <p>Includes editing, cover design, copyright and ISBN, printing, and sales distribution on Amazon (Print)</p>
            </li>
            <li className="d-flex flex-column">
                <h5>Inspire Today (Starting at $3000)</h5>
                <p>Inspire lite + promotion on media in Canada and Zimbabwe. Also distributing up to 3 bookstores.</p>
            </li>
            <li className="d-flex flex-column">
                <h5>Inspire Heavy (Starting at $5000)</h5>
                <p>Inpire today + Ghost writing.</p>            
            </li>
        </ol>
    )
}

function PublishWithUs(){
    return(
        
    <div className="container">
        <p>Hi there, submit your manuscript today and make you dream come true. Authors get 35-40% of royalties.</p>
        <Services />
    </div>
    )
}
const PublishingModal = () => {
    return (  
        <div className="modal" id="publishingModal">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Publishing</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                     </div>
                     <div className="modal-body">
                        <PublishWithUs />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default PublishingModal;