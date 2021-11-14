

const EditingModal = () => {
    return ( 
        <div className="modal" id="editingModal">
            <div className="modal-dialog modal-lg  modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Editing</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                    <div>
                        <div className="container">
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
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default EditingModal;