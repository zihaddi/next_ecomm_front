import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FontAwesomeCom from "../../../Helpers/icons/FontAwesomeCom";
import languageModel from "../../../../../utils/languageModel";
export default function Footer({ settings, contact }) {
  const { websiteSetup } = useSelector((state) => state.websiteSetup);
  const [firstCol, setFirstCol] = useState(null);
  const [secondCol, setSecondCol] = useState(null);
  const [thirdCol, setThirdCol] = useState(null);
  const [footerContent, setFooterContent] = useState(null);
  const [socialLink, setSocialLink] = useState(null);
  const [langCntnt, setLangCntnt] = useState(null);
  useEffect(() => {
    setLangCntnt(languageModel());
  }, []);
  useEffect(() => {
    if (!footerContent) {
      setFooterContent(
        websiteSetup && websiteSetup.payload && websiteSetup.payload.footer
      );
    }
  });

  useEffect(() => {
    if (!socialLink) {
      setSocialLink(
        websiteSetup &&
          websiteSetup.payload &&
          websiteSetup.payload.social_links
      );
    }
  });

  useEffect(() => {
    if (!firstCol) {
      setFirstCol(
        websiteSetup &&
          websiteSetup.payload &&
          websiteSetup.payload.footer_first_col
      );
    }
  });
  useEffect(() => {
    if (!secondCol) {
      setSecondCol(
        websiteSetup &&
          websiteSetup.payload &&
          websiteSetup.payload.footer_second_col
      );
    }
  });
  useEffect(() => {
    if (!thirdCol) {
      setThirdCol(
        websiteSetup &&
          websiteSetup.payload &&
          websiteSetup.payload.footer_third_col
      );
    }
  });

  return (
    <footer className="footer-section-wrapper print:hidden bg-[#222222] -mt-[70px] pl-3.5 sm:pl-0">
      <div className="container-x block mx-auto pt-[96px]">
        <div className="xl:flex justify-between mb-[80px]">
          <div className="flex-1 lg:flex  ml-0 w-full mb-10 lg:mb-0">
            <div className="w-[350px]">
              <div className="">
                <Link href="/" passHref>
                  <a>
                    {settings && (
                      <Image
                        width="153"
                        height="44"
                        objectFit="scale-down"
                        src={`${
                          process.env.NEXT_PUBLIC_BASE_URL + settings.logo
                        }`}
                        alt="logo"
                      />
                    )}
                  </a>
                </Link>
              </div>
              {thirdCol && (
                <div>
                  <ul className="flex flex-col space-y-5 ">
                    {thirdCol.col_links.length > 0 &&
                      thirdCol.col_links.map((item, i) => (
                        <li key={i}>
                          <Link href={item.link} passHref>
                            <a rel="noopener noreferrer">
                              <span className="text-[#C8C8C8] text-[15px] hover:text-qgreen hover:underline cursor-pointer">
                                {item.title}
                              </span>
                            </a>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="lg:w-[260px] w-full mb-10 lg:mb-0 mt-10 lg:mt-0">
              {firstCol && (
                <>
                  <div className="mb-5">
                    <h6 className="text-[18] font-500 text-white">
                      {firstCol.columnTitle}
                    </h6>
                  </div>
                  <div>
                    <ul className="flex flex-col space-y-5 ">
                      {firstCol.col_links.length > 0 &&
                        firstCol.col_links.map((item, i) => (
                          <li key={i}>
                            <Link href={item.link} passHref>
                              <a rel="noopener noreferrer">
                                <span className="text-[#C8C8C8] text-[15px] hover:text-qgreen hover:underline cursor-pointer">
                                  {item.title}
                                </span>
                              </a>
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
            <div className="lg:w-[260px] lg:flex lg:flex-col w-full mb-10 lg:mb-0 relative">
              <div>
                {secondCol && (
                  <>
                    <div className="mb-5">
                      <h6 className="text-[18] font-500 text-white">
                        {secondCol.columnTitle}
                      </h6>
                    </div>
                    <div>
                      <ul className="flex flex-col space-y-5 ">
                        {secondCol.col_links.length > 0 &&
                          secondCol.col_links.map((item, i) => (
                            <li key={i}>
                              <Link href={item.link} passHref>
                                <a rel="noopener noreferrer">
                                  <span className="text-[#C8C8C8] text-[15px] hover:text-qgreen hover:underline cursor-pointer">
                                    {item.title}
                                  </span>
                                </a>
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
              <div className="w-[1px] xl:block hidden h-[270px] absolute left-[213px] bg-[#424242]"></div>
            </div>
          </div>
          <div className="xl:w-[490px] lg:flex mt-5 xl:mt-0">
            <div className="w-full">
              <div className="mb-5">
                <h6 className="text-[18] font-500 text-white">
                  {langCntnt && langCntnt.Contact_Info}
                </h6>
              </div>
              {contact && (
                <div>
                  <div className="w-full flex space-x-5 mb-2">
                    <span>
                      <svg
                        width="44"
                        height="45"
                        viewBox="0 0 44 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="21.9995"
                          cy="22.9961"
                          r="21.5"
                          stroke="#424242"
                        />
                        <g clipPath="url(#clip0_2343_13859)">
                          <path
                            d="M22.0218 13.9961C26.4153 14.0049 29.7134 17.7202 28.8665 21.6964C28.4484 23.66 27.5123 25.4261 26.3138 27.0614C25.1774 28.6116 23.9185 30.0879 22.6867 31.5779C22.2178 32.1454 21.804 32.1262 21.3001 31.5795C19.1664 29.2642 17.2295 26.8278 15.9102 24.0253C15.3696 22.8757 14.9978 21.6836 14.9995 20.4176C15.003 16.8701 18.1568 13.9881 22.0218 13.9961ZM22.0297 30.36C22.9045 29.2763 23.7479 28.3049 24.5037 27.2782C25.8116 25.5008 26.9568 23.6407 27.4616 21.5142C28.0739 18.934 26.466 16.3499 23.7566 15.5367C21.0149 14.713 18.0326 15.9324 16.8743 18.344C16.1858 19.777 16.3188 21.2091 16.8647 22.6413C17.6756 24.7695 18.9512 26.6632 20.399 28.4655C20.8889 29.0764 21.4226 29.6576 22.0297 30.36Z"
                            fill="white"
                          />
                          <path
                            d="M24.7977 20.4357C24.7916 21.8486 23.5204 22.9982 21.9728 22.9886C20.4567 22.9797 19.2005 21.8197 19.1987 20.4253C19.1961 19.0148 20.4664 17.85 22.0043 17.8516C23.5432 17.8532 24.8029 19.0188 24.7977 20.4357ZM23.3953 20.4213C23.3953 19.7156 22.7873 19.1481 22.021 19.1384C21.2371 19.128 20.6011 19.702 20.6011 20.4213C20.6011 21.1253 21.2109 21.6937 21.9772 21.7033C22.7663 21.7121 23.3953 21.143 23.3953 20.4213Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2343_13859">
                            <rect
                              width="14"
                              height="18"
                              fill="white"
                              transform="translate(14.9995 13.9961)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <div>
                      <h1 className="text-[15px] font-semibold text-white">
                        {langCntnt && langCntnt.Address}:
                      </h1>
                      <p className="text-[15px] text-[#C8C8C8] leading-[30px] w-[248px]">
                        {contact.address}
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex space-x-5 mb-2">
                    <span>
                      <svg
                        width="44"
                        height="45"
                        viewBox="0 0 44 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="21.9995"
                          cy="22.9961"
                          r="21.5"
                          stroke="#424242"
                        />
                        <g clipPath="url(#clip0_56_7)">
                          <path
                            d="M26.9779 30.9959C25.7937 30.9581 24.6221 30.5625 23.5005 30.0096C19.5679 28.0716 16.6582 25.1275 14.8109 21.1599C14.2944 20.0502 13.9265 18.8947 14.0112 17.6423C14.0558 16.9879 14.2937 16.4177 14.7489 15.9459C15.1954 15.4839 15.6439 15.0233 16.1124 14.5833C16.9448 13.8008 17.8545 13.7981 18.6795 14.5866C19.3846 15.2596 20.075 15.9492 20.7514 16.6514C21.5858 17.5175 21.5732 18.3743 20.7348 19.2431C20.3969 19.5935 20.051 19.9387 19.6925 20.2685C19.5419 20.4072 19.5299 20.5161 19.6205 20.692C20.257 21.9198 21.1526 22.9459 22.1916 23.8359C22.8434 24.3941 23.5884 24.8434 24.2909 25.3425C24.4555 25.46 24.5754 25.4295 24.7174 25.2814C25.1092 24.8753 25.5058 24.4704 25.9276 24.0954C26.6407 23.4616 27.5164 23.4689 28.2035 24.1259C28.9725 24.8607 29.7269 25.6113 30.4647 26.3772C31.1558 27.0953 31.1784 27.9907 30.5187 28.7333C30.0415 29.2709 29.5317 29.782 29.0105 30.2784C28.4727 30.7915 27.8003 30.9952 26.9779 30.9959ZM27.0239 30.1377C27.6637 30.1616 28.1902 29.9307 28.6247 29.4647C28.9645 29.1004 29.3198 28.7499 29.6703 28.3962C30.2688 27.7922 30.2734 27.4119 29.6796 26.8199C29.0365 26.1781 28.3921 25.5376 27.7463 24.8985C27.2265 24.3841 26.8546 24.3848 26.3241 24.9045C25.9203 25.3 25.5244 25.7036 25.1206 26.0985C24.7974 26.415 24.5148 26.4774 24.1316 26.2418C23.4165 25.8011 22.6768 25.3823 22.0303 24.8534C20.6835 23.7523 19.5132 22.4853 18.7561 20.8917C18.5062 20.3661 18.5576 20.1597 18.9861 19.7502C19.3706 19.3825 19.7545 19.0141 20.1243 18.6325C20.6122 18.1301 20.6115 17.7518 20.1237 17.2586C19.4472 16.5724 18.7641 15.8921 18.0764 15.2171C17.5952 14.7446 17.1827 14.7512 16.6922 15.2284C16.311 15.5994 15.9478 15.989 15.5586 16.3507C15.0221 16.8491 14.8255 17.4597 14.8695 18.1739C14.9275 19.117 15.2221 19.9964 15.6179 20.838C17.3853 24.5985 20.1457 27.402 23.8823 29.2424C24.8707 29.7302 25.9036 30.0959 27.0239 30.1377Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_56_7">
                            <rect
                              width="17"
                              height="17"
                              fill="white"
                              transform="translate(13.9995 13.9961)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <div>
                      <h1 className="text-[15px] font-semibold text-white capitalize">
                        {langCntnt && langCntnt.phone}:
                      </h1>
                      <p className="text-[15px] text-[#C8C8C8] leading-[30px] w-[248px]">
                        {contact.phone}
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex space-x-5 ">
                    <span>
                      <svg
                        width="44"
                        height="44"
                        viewBox="0 0 44 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="22" cy="22" r="21.5" stroke="#424242" />
                        <path
                          d="M22.2477 27.9994C19.9168 27.9994 17.5858 28.0001 15.2542 27.9987C14.1169 27.9981 13.5043 27.3807 13.5036 26.2358C13.5036 23.2881 13.5029 20.3398 13.5043 17.3915C13.505 16.2734 14.1258 15.6512 15.2432 15.6512C19.9394 15.6505 24.6363 15.6498 29.3325 15.6512C30.4472 15.6512 31.0652 16.2747 31.0659 17.397C31.0673 20.3453 31.0666 23.293 31.0659 26.2413C31.0652 27.3841 30.4513 27.9987 29.3098 27.9987C26.9556 28.0001 24.602 27.9994 22.2477 27.9994ZM15.307 16.7C15.4099 16.8119 15.4806 16.8955 15.5574 16.9724C17.3807 18.7861 19.2047 20.5998 21.0294 22.4128C21.8656 23.2436 22.7032 23.2449 23.538 22.4156C25.3627 20.6032 27.1861 18.7895 29.0101 16.9751C29.0876 16.8983 29.1589 16.8153 29.2659 16.7C24.5958 16.7 19.9765 16.7 15.307 16.7ZM24.8544 22.5404C24.1307 23.3417 23.4187 24.0654 22.2765 24.064C21.1337 24.0619 20.4326 23.319 19.7425 22.5795C18.2876 24.066 16.8511 25.534 15.4751 26.9403C19.9874 26.9403 24.6061 26.9403 29.1617 26.9403C27.7472 25.4956 26.3169 24.0345 24.8544 22.5404ZM18.8357 21.8716C17.413 20.4304 15.9765 18.9747 14.5627 17.5424C14.5627 20.3899 14.5627 23.2779 14.5627 26.2186C16.0342 24.7212 17.4658 23.2655 18.8357 21.8716ZM25.7338 21.7982C27.1408 23.2298 28.5752 24.6889 30.0123 26.1507C30.0123 23.2655 30.0123 20.3782 30.0123 17.4663C28.5539 18.9425 27.1209 20.394 25.7338 21.7982Z"
                          fill="white"
                        />
                      </svg>
                    </span>

                    <div>
                      <h1 className="text-[15px] font-semibold text-white capitalize">
                        {langCntnt && langCntnt.Email}:
                      </h1>
                      <p className="text-[15px] text-[#C8C8C8] leading-[30px] w-[248px]">
                        {contact.email}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className="bottom-bar border-t border-[#424242] lg:h-[82px] flex lg:flex-row flex-col-reverse
         justify-between items-center"
        >
          <div className="flex lg:space-x-5 space-x-2.5 justify-between items-center mb-3">
            <div className="flex space-x-5 items-center">
              {socialLink &&
                socialLink.length > 0 &&
                socialLink.map((item, i) => (
                  <a key={i} href={item.link} target="_blank" rel="noreferrer">
                    <FontAwesomeCom
                      className="w-4 h-4 text-[#C8C8C8]"
                      icon={item.icon}
                    />
                  </a>
                ))}
            </div>
            <span className="sm:text-base text-[10px] text-[#C8C8C8] font-300">
              {footerContent && footerContent.copyright
                ? footerContent.copyright
                : ""}
            </span>
          </div>
          {footerContent && footerContent.payment_image ? (
            <div className="mt-2 lg:mt-0">
              <Link href="#" passHref>
                <a>
                  <Image
                    width="318"
                    height="28"
                    src={`${
                      process.env.NEXT_PUBLIC_BASE_URL +
                      footerContent.payment_image
                    }`}
                    alt="payment-getways"
                  />
                </a>
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </footer>
  );
}
