function Services(){
    return(
        <div className="d-flex flex-column ">
            <p>
                To become a professional writer or speaker it does not only take talent but extensive training and encouragement. We have a group of authors and speakers from across the globe at your disposal many of which are bilingual. Give us a chance to grow your talent.
                Please send your name, what you need mentoring for (writing or speaking), and contact through our email: info@mandinpirations.com
            </p>
        </div>
    )
}
const MentoringModal = () => {
    return (
        <div className="modal" id="mentoringModal">
            <div className="modal-dialog modal-lg  modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Mentoring</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                     </div>
                     <div className="modal-body">
                         <div className="container">
                            <Services />
                         </div>
                    </div>
                </div>
            </div>
        </div>
      );
}
 
export default MentoringModal;