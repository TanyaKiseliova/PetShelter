
const AmountSection: React.FC = () => {
  return (
 
    <div className="bg-light py-5 px-md-4">
        <div className="container px-md-4">
            <h2 className="text-center mb-4 display-8 fw-bold text-primary">Наш приют в цифрах</h2>
            <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h3 className="card-title d-flex justify-content-center align-items-center">5</h3>
                      <p className="card-text d-flex justify-content-center align-items-center">
                        лет опыта 
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h3 className="card-title d-flex justify-content-center align-items-center">150</h3>
                      <p className="card-text d-flex justify-content-center align-items-center">
                      питомцев счастливы в новвх домах
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h3 className="card-title  d-flex justify-content-center align-items-center">20</h3>
                      <p className="card-text d-flex justify-content-center align-items-center">
                        животных все еще в приюте 
                      </p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AmountSection;


