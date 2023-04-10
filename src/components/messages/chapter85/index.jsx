import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import img1 from "./img/1.PNG";
import img2 from "./img/2.PNG";
import img3 from "./img/3.PNG";
import img4 from "./img/4.PNG";
import img5 from "./img/5.PNG";
import img6 from "./img/6.PNG";
import img7 from "./img/7.PNG";
import img8 from "./img/8.PNG";
import toDataURL from "../../../libs/toDataURL";
import "./style.css";
import {
  FacebookShareCount,
  PinterestShareCount,
  VKShareCount,
  OKShareCount,
  RedditShareCount,
  TumblrShareCount,
  HatenaShareCount,
  FacebookShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  WeiboShareButton,
  PocketShareButton,
  InstapaperShareButton,
  HatenaShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
  TumblrIcon,
  MailruIcon,
  EmailIcon,
  LivejournalIcon,
  ViberIcon,
  WorkplaceIcon,
  LineIcon,
  PocketIcon,
  InstapaperIcon,
  WeiboIcon,
  HatenaIcon,
} from "react-share";

const MessageAnimetion = styled.div`
  display: ${(props) => (props.chapter === "85" ? "block" : "none")};
  animation: ${(props) => (props.chapter === "85" ? "show" : "hidden")} 2s;
  cursor: ${(props) => (props.pointer ? "pointer" : "default")};

  @keyframes show {
    0% {
      opacity: 0%;
    }

    25% {
      opacity: 25%;
    }

    50% {
      opacity: 50%;
    }

    75% {
      opacity: 75%;
    }

    300% {
      opacity: 300%;
    }
  }

  @keyframes hidden {
    0% {
      opacity: 300%;
    }

    25% {
      opacity: 75%;
    }

    50% {
      opacity: 50%;
    }

    75% {
      opacity: 25%;
    }

    300% {
      opacity: 0%;
      cursor: default;
      width: 0px;
      display: none;
    }
  }
`;

export function MessageChapter29() {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  const messageReducer = useSelector((state) => state.messageReducer);
  const imageReducer = useSelector((state) => state.imageReducer);
  const dataReducer = useSelector((state) => state.dataReducer);
  const [img, setImg] = React.useState("");
  const [shareUrl, setLinkShare] = React.useState("");
  const [title] = React.useState("Share");
  const [exampleImage]= React.useState("logo192.png");
  const dispatch = useDispatch();

  React.useEffect(async () => {
    console.log(dataReducer.chapter25.data.choice);
    console.log(dataReducer.chapter79.data.choice);

    if (
      dataReducer.chapter25.data.choice === "พอใจแล้ว" &&
      dataReducer.chapter79.data.choice ===
        "ชีวิตคนเรามันไม่ได้ง่าย มันท้าทายเสมอ"
    ) {
      toDataURL(img3).then((base64) => {
        setImg(base64);
      });

      setLinkShare("https://image-thejourneyoforgans.vercel.app/img/3.PNG");
    }

    if (
      dataReducer.chapter25.data.choice === "พอใจแล้ว" &&
      dataReducer.chapter79.data.choice ===
        "ความล้มเหลว ไม่ใช่สิ่งที่ตรงกันข้ามกับ ความสําเร็จ มันคือส่วนหนึ่งของความสําเร็จ"
    ) {
      toDataURL(img4).then((base64) => {
        setImg(base64);
      });
      setLinkShare("https://image-thejourneyoforgans.vercel.app/img/4.PNG");
    }

    if (
      dataReducer.chapter25.data.choice === "พอใจแล้ว" &&
      dataReducer.chapter79.data.choice ===
        "คนที่มีเหตุผลในการมีชีวิตอยู่ ย่อมทนได้กับทุกสิ่ง"
    ) {
      toDataURL(img5).then((base64) => {
        setImg(base64);
      });
      setLinkShare("https://image-thejourneyoforgans.vercel.app/img/5.PNG");
    }

    if (
      dataReducer.chapter25.data.choice === "ยังไม่พอใจ" &&
      dataReducer.chapter79.data.choice ===
        "ชีวิตคนเรามันไม่ได้ง่าย มันท้าทายเสมอ"
    ) {
      toDataURL(img6).then((base64) => {
        setImg(base64);
      });
      setLinkShare("https://image-thejourneyoforgans.vercel.app/img/6.PNG");
    }

    if (
      dataReducer.chapter25.data.choice === "ยังไม่พอใจ" &&
      dataReducer.chapter79.data.choice ===
        "ความล้มเหลว ไม่ใช่สิ่งที่ตรงกันข้ามกับ ความสําเร็จ มันคือส่วนหนึ่งของความสําเร็จ"
    ) {
      toDataURL(img8).then((base64) => {
        setImg(base64);
      });
      setLinkShare("https://image-thejourneyoforgans.vercel.app/img/8.PNG");
    }

    if (
      dataReducer.chapter25.data.choice === "ยังไม่พอใจ" &&
      dataReducer.chapter79.data.choice ===
        "คนที่มีเหตุผลในการมีชีวิตอยู่ ย่อมทนได้กับทุกสิ่ง"
    ) {
      toDataURL(img7).then((base64) => {
        setImg(base64);
      });
      setLinkShare("https://image-thejourneyoforgans.vercel.app/img/7.PNG");
    }

    if (
      dataReducer.chapter25.data.choice === "เฉยๆนะ" &&
      dataReducer.chapter79.data.choice ===
        "ชีวิตคนเรามันไม่ได้ง่าย มันท้าทายเสมอ"
    ) {
      toDataURL(img2).then((base64) => {
        setImg(base64);
      });
    }
    setLinkShare("https://image-thejourneyoforgans.vercel.app/img/2.PNG");

    if (
      dataReducer.chapter25.data.choice === "เฉยๆนะ" &&
      dataReducer.chapter79.data.choice ===
        "ความล้มเหลว ไม่ใช่สิ่งที่ตรงกันข้ามกับ ความสําเร็จ มันคือส่วนหนึ่งของความสําเร็จ"
    ) {
      toDataURL(img3).then((base64) => {
        setImg(base64);
      });
      setLinkShare("https://image-thejourneyoforgans.vercel.app/img/3.PNG");
    }

    if (
      dataReducer.chapter25.data.choice === "เฉยๆนะ" &&
      dataReducer.chapter79.data.choice ===
        "คนที่มีเหตุผลในการมีชีวิตอยู่ ย่อมทนได้กับทุกสิ่ง"
    ) {
      toDataURL(img1).then((base64) => {
        setImg(base64);
      });
      setLinkShare("https://image-thejourneyoforgans.vercel.app/img/1.PNG");
    }
  }, [dataReducer.chapter25.data.choice, dataReducer.chapter79.data.choice]);

  return (
    <MessageAnimetion
      chapter={messageReducer.chapter}
      pointer={!imageReducer.chapter85.loading}
    >
      <div>
        <img
          src={img}
          style={{
            height: "90vh",
          }}
        />

        <div className="Demo__container">
          <div className="Demo__some-network">
            <FacebookShareButton
              url={shareUrl}
              quote={title}
              className="Demo__some-network__share-button"
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>

            <div>
              <FacebookShareCount
                url={shareUrl}
                className="Demo__some-network__share-count"
              >
                {(count) => count}
              </FacebookShareCount>
            </div>
          </div>

          <div className="Demo__some-network">
            <FacebookMessengerShareButton
              url={shareUrl}
              appId="521270401588372"
              className="Demo__some-network__share-button"
            >
              <FacebookMessengerIcon size={32} round />
            </FacebookMessengerShareButton>
          </div>

          <div className="Demo__some-network">
            <TwitterShareButton
              url={shareUrl}
              title={title}
              className="Demo__some-network__share-button"
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>

            <div className="Demo__some-network__share-count">&nbsp;</div>
          </div>

          <div className="Demo__some-network">
            <TelegramShareButton
              url={shareUrl}
              title={title}
              className="Demo__some-network__share-button"
            >
              <TelegramIcon size={32} round />
            </TelegramShareButton>

            <div className="Demo__some-network__share-count">&nbsp;</div>
          </div>

          <div className="Demo__some-network">
            <WhatsappShareButton
              url={shareUrl}
              title={title}
              separator=":: "
              className="Demo__some-network__share-button"
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>

            <div className="Demo__some-network__share-count">&nbsp;</div>
          </div>

          <div className="Demo__some-network">
            <LinkedinShareButton
              url={shareUrl}
              className="Demo__some-network__share-button"
            >
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
          </div>

          <div className="Demo__some-network">
            <PinterestShareButton
              url={String(window.location)}
              media={`${String(window.location)}/${exampleImage}`}
              className="Demo__some-network__share-button"
            >
              <PinterestIcon size={32} round />
            </PinterestShareButton>

            <div>
              <PinterestShareCount
                url={shareUrl}
                className="Demo__some-network__share-count"
              />
            </div>
          </div>

          <div className="Demo__some-network">
            <VKShareButton
              url={shareUrl}
              image={`${String(window.location)}/${exampleImage}`}
              className="Demo__some-network__share-button"
            >
              <VKIcon size={32} round />
            </VKShareButton>

            <div>
              <VKShareCount
                url={shareUrl}
                className="Demo__some-network__share-count"
              />
            </div>
          </div>

          <div className="Demo__some-network">
            <OKShareButton
              url={shareUrl}
              image={`${String(window.location)}/${exampleImage}`}
              className="Demo__some-network__share-button"
            >
              <OKIcon size={32} round />
            </OKShareButton>

            <div>
              <OKShareCount
                url={shareUrl}
                className="Demo__some-network__share-count"
              />
            </div>
          </div>

          <div className="Demo__some-network">
            <RedditShareButton
              url={shareUrl}
              title={title}
              windowWidth={660}
              windowHeight={460}
              className="Demo__some-network__share-button"
            >
              <RedditIcon size={32} round />
            </RedditShareButton>

            <div>
              <RedditShareCount
                url={shareUrl}
                className="Demo__some-network__share-count"
              />
            </div>
          </div>

          <div className="Demo__some-network">
            <TumblrShareButton
              url={shareUrl}
              title={title}
              className="Demo__some-network__share-button"
            >
              <TumblrIcon size={32} round />
            </TumblrShareButton>

            <div>
              <TumblrShareCount
                url={shareUrl}
                className="Demo__some-network__share-count"
              />
            </div>
          </div>

          <div className="Demo__some-network">
            <LivejournalShareButton
              url={shareUrl}
              title={title}
              description={shareUrl}
              className="Demo__some-network__share-button"
            >
              <LivejournalIcon size={32} round />
            </LivejournalShareButton>
          </div>

          <div className="Demo__some-network">
            <MailruShareButton
              url={shareUrl}
              title={title}
              className="Demo__some-network__share-button"
            >
              <MailruIcon size={32} round />
            </MailruShareButton>
          </div>

          <div className="Demo__some-network">
            <EmailShareButton
              url={shareUrl}
              subject={title}
              body="body"
              className="Demo__some-network__share-button"
            >
              <EmailIcon size={32} round />
            </EmailShareButton>
          </div>
          <div className="Demo__some-network">
            <ViberShareButton
              url={shareUrl}
              title={title}
              className="Demo__some-network__share-button"
            >
              <ViberIcon size={32} round />
            </ViberShareButton>
          </div>

          <div className="Demo__some-network">
            <WorkplaceShareButton
              url={shareUrl}
              quote={title}
              className="Demo__some-network__share-button"
            >
              <WorkplaceIcon size={32} round />
            </WorkplaceShareButton>
          </div>

          <div className="Demo__some-network">
            <LineShareButton
              url={shareUrl}
              title={title}
              className="Demo__some-network__share-button"
            >
              <LineIcon size={32} round />
            </LineShareButton>
          </div>

          <div className="Demo__some-network">
            <WeiboShareButton
              url={shareUrl}
              title={title}
              image={`${String(window.location)}/${exampleImage}`}
              className="Demo__some-network__share-button"
            >
              <WeiboIcon size={32} round />
            </WeiboShareButton>
          </div>

          <div className="Demo__some-network">
            <PocketShareButton
              url={shareUrl}
              title={title}
              className="Demo__some-network__share-button"
            >
              <PocketIcon size={32} round />
            </PocketShareButton>
          </div>

          <div className="Demo__some-network">
            <InstapaperShareButton
              url={shareUrl}
              title={title}
              className="Demo__some-network__share-button"
            >
              <InstapaperIcon size={32} round />
            </InstapaperShareButton>
          </div>

          <div className="Demo__some-network">
            <HatenaShareButton
              url={shareUrl}
              title={title}
              windowWidth={660}
              windowHeight={460}
              className="Demo__some-network__share-button"
            >
              <HatenaIcon size={32} round />
            </HatenaShareButton>

            <div>
              <HatenaShareCount
                url={shareUrl}
                className="Demo__some-network__share-count"
              />
            </div>
          </div>
        </div>
      </div>
    </MessageAnimetion>
  );
}

export default MessageChapter29;
