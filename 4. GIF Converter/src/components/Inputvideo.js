export default function Inputvideo({ onVideoSelect, video }) {
    return (
        <div>
            <input className="file"
                type="file"
                accept="video/*"
                onChange={(e) => onVideoSelect(e.target.files[0])}
            />
            {video && (
                <video width="250" style={{border:'2px solid black',padding:'20px', backgroundColor:'skyblue'}} controls>
                    <source src={URL.createObjectURL(video)} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            )}
        </div>
    );
}
