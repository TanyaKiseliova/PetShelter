
const VideoSection: React.FC = () => {
  return (
    <div className="row mt-5 volounter-card">
        <div className="col-12">
          <h3 className="text-center mb-4 display-8 fw-bold text-primary">Видео о работе приюта</h3>
          <div className="ratio ratio-16x9" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <iframe
              src="https://www.youtube.com/embed/l5tIuiRpkDo?si=gZm3HWbFjmoNmLHO"
              title="Video about shelter"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
    </div>
  );
};

export default VideoSection; 
 
 
 