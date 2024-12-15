import React from "react";
import {useParams} from "react-router-dom";
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'


const RoomPage = () => {
    const{ roomId } = useParams()

    const myMeeting = async (element) => {
        const appID = 884238991;
        
        const serverSecret = "9b9cef51f5eb5afe07064a5ff388315d";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, 
            serverSecret, 
            roomId, 
            Date.now().toString(),
             "Lorik Popaj"
             );
             const zc = ZegoUIKitPrebuilt.create(kitToken);
             zc.joinRoom({
                container: element, 
                sharedLinks:[
                    {
                        name: 'Copy Link',
                        url: `http://localhost:3000/room/@{roomId}`
                        
                    }

                ],
                scenario: {
                    mode: ZegoUIKitPrebuilt.OneONoneCall,
                },
                showScreenSharingButton: true,
             });
    };

    return <div>
        
        <div ref={myMeeting} style={{ 
            marginTop: "250px",
            justifyContent: "center",      
    }} />
        
         </div>;



};

export default RoomPage;