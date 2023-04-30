import React from "react";

import { Img, Text, Button, CheckBox, List, Line } from "components";

const InvoicePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-nunitosans items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-[33px] items-center justify-between max-w-[1706px] mx-auto md:px-5 w-full">
          <aside className="flex flex-col md:hidden justify-start w-[350px]">
            <div className="flex md:h-[1111px] h-[1117px] justify-end relative w-full">
              {/* <div className="flex flex-col md:gap-10 gap-[854px] h-full items-start justify-start mb-8 ml-8 mt-auto w-[67%]">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-row gap-[13px] items-center justify-start w-full">
                    <Img
                      src="images/img_createnewfolder.svg"
                      className="h-6 w-6"
                      alt="createnewfolder"
                    />
                    <Text
                      className="capitalize font-normal not-italic text-gray_100 text-left w-auto"
                      as="h2"
                      variant="h2"
                    >
                      Document Generation
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col h-[34px] items-center justify-start p-0.5 rounded-[50%] w-[34px]">
                  <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
                    <Img
                      src="images/img_settings.svg"
                      className="h-[30px] rounded-[1px] w-[30px]"
                      alt="settings"
                    />
                  </div>
                </div>
              </div> */}
              <div className="absolute bg-teal_900 flex flex-col h-full inset-[0] items-center justify-center m-auto p-6 sm:px-5 w-full">
                <div className="flex flex-col justify-start mb-[509px] mt-4 w-full">
                  <Img
                    src="images/img_finalfilecashwise.svg"
                    className="h-[21px] ml-0.5 md:ml-[0] w-auto"
                    alt="finalfilecashwi"
                  />
                  <div className="bg-blue_800_0c flex flex-col items-center justify-start mt-[46px] p-5 rounded-lg w-full">
                    <div className="flex flex-row items-start justify-start mt-[5px] w-full">
                      <div className="h-11 relative w-[17%]">
                        <div className="absolute bg-white_A700 border border-solid border-white_A700 h-[42px] inset-[0] justify-center m-auto rounded-md w-[42px]"></div>
                        <Text
                          className="absolute h-full inset-[0] justify-center m-auto text-blue_800 text-left w-max"
                          as="h1"
                          variant="h1"
                        >
                          G
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start inline-block ml-[22px] w-auto">
                        <Text
                          className="font-nunitosans mt-1 ssnot-italic text-gray_100 text-left w-auto"
                          as="h3"
                          variant="h3"
                        >
                          Entity Name
                        </Text>
                        <Text
                          className="font-publicsans mt-1 not-italic text-gray_100 text-left underline w-auto"
                          as="h4"
                          variant="h4"
                        >
                          Add website
                        </Text>
                      </div>
                      <Button
                        className="flex h-7 items-center justify-center mb-2.5 ml-[81px] mt-1.5 rounded-[50%] w-7"
                        size="smIcn"
                        variant="icbFillBluegray10019"
                      >
                        <Img
                          src="images/img_settingsfill0.svg"
                          className="h-5"
                          alt="settingsfillZero"
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[18px] mt-[55px] w-[65%] md:w-full">
                    <Img
                      src="images/img_noteaddwhite24dp.svg"
                      className="h-6 w-6"
                      alt="noteaddwhite24d"
                    />
                    <div className="flex flex-col items-center justify-start w-auto">
                      <Text
                        className="not-italic text-gray_100 text-left w-auto"
                        as="h3"
                        variant="h3"
                      >
                        Document Generation
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start md:ml-[0] ml-[18px] mt-10 w-[87%] md:w-full">
                    <Img
                      src="images/img_clouddonewhite24dp.svg"
                      className="h-6 w-6"
                      alt="clouddonewhiteTwo"
                    />
                    <div className="flex flex-col items-center justify-start ml-[15px] mt-0.5 w-[52%]">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="not-italic text-gray_100 text-left w-auto"
                          as="h3"
                          variant="h3"
                        >
                          Document Storage
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-6 ml-16 w-6"
                      alt="arrowdown"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-start md:ml-[0] ml-[17px] mt-9 w-[88%] md:w-full">
                    <Img
                      src="images/img_receiptlongfi.svg"
                      className="h-6 w-6"
                      alt="receiptlongfi"
                    />
                    <div className="flex flex-col items-center justify-start ml-4 mt-0.5 w-[57%]">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="not-italic text-gray_100 text-left w-auto"
                          as="h3"
                          variant="h3"
                        >
                          Invoice Management
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_arrowup.svg"
                      className="h-6 ml-[49px] w-6"
                      alt="arrowup"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[57px] mt-[35px] w-[29%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="not-italic text-gray_100 text-left w-auto"
                        as="h3"
                        variant="h3"
                      >
                        New Invoice
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[57px] mt-8 w-[41%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="not-italic text-gray_100 text-left w-auto"
                        as="h3"
                        variant="h3"
                      >
                        Invoice Summary
                      </Text>
                    </div>
                  </div>
                  <div className="h-[52px] md:h-[68px] mt-4 relative w-full">
                    <div className="flex flex-col h-full items-center justify-start ml-[57px] mt-[13px] w-1/4">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="not-italic text-gray_100 text-left w-auto"
                          as="h3"
                          variant="h3"
                        >
                          Client List
                        </Text>
                      </div>
                    </div>
                    <div className="absolute bg-blue_800_33 h-[52px] inset-[0] justify-center m-auto rounded-md w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <div className="flex flex-1 flex-col items-start justify-start w-full">
            <div className="flex flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="capitalize font-normal not-italic text-blue_gray_900 text-left w-auto"
                  as="h2"
                  variant="h2"
                >
                  Invoice Summary
                </Text>
              </div>
              <Text
                className="bg-blue_800 flex font-semibold h-[45px] items-center justify-center rounded-[22px] text-center text-white_A700 w-[45px]"
                as="h2"
                variant="h2"
              >
                A
              </Text>
            </div>
            <div className="bg-white_A700 flex flex-col items-center justify-start mt-8 p-8 sm:px-5 rounded-[12px] shadow-bs w-full">
              <div className="flex flex-col items-start justify-start mb-[199px] mt-4 w-full">
                <div className="flex flex-row gap-[59px] items-center justify-start w-[22%] md:w-full">
                  <Text
                    className="capitalize not-italic text-blue_800 text-left w-auto"
                    as="h3"
                    variant="h3"
                  >
                    Active Clients
                  </Text>
                  <Text
                    className="capitalize not-italic text-blue_gray_200 text-left w-auto"
                    as="h3"
                    variant="h3"
                  >
                    Deleted Clients
                  </Text>
                </div>
                <Button
                  className="capitalize cursor-pointer font-normal h-11 mt-[46px] not-italic text-base text-center text-gray_600 w-[100px]"
                  shape="RoundedBorder8"
                  size="sm"
                  variant="OutlineBluegray200"
                >
                  Delete
                </Button>
                <div className="bg-gray_100 flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-5 p-3.5 w-full">
                  <CheckBox
                    className="font-normal mb-1.5 sm:mt-0 mt-[9px] not-italic sm:pl-5 text-base text-blue_gray_900 text-left"
                    inputClassName="h-[18px] mr-[5px] w-[18px]"
                    name="clientname"
                    id="clientname"
                    label="Client Name"
                    shape="RoundedBorder3"
                    variant="OutlineBluegray200"
                  ></CheckBox>
                  <Text
                    className="mb-1.5 sm:ml-[0] ml-[65px] sm:mt-0 mt-[9px] not-italic text-blue_gray_900 text-left w-auto"
                    as="h3"
                    variant="h3"
                  >
                    Phone
                  </Text>
                  <Text
                    className="mb-1.5 sm:ml-[0] ml-[109px] sm:mt-0 mt-[9px] not-italic text-blue_gray_900 text-left w-auto"
                    as="h3"
                    variant="h3"
                  >
                    Email
                  </Text>
                  <Text
                    className="mb-1.5 sm:ml-[0] ml-[197px] sm:mt-0 mt-[9px] not-italic text-blue_gray_900 text-left w-auto"
                    as="h3"
                    variant="h3"
                  >
                    GSTIN/Tax ID
                  </Text>
                  <Text
                    className="mb-1.5 sm:ml-[0] ml-[85px] sm:mt-0 mt-[9px] not-italic text-blue_gray_900 text-left w-auto"
                    as="h3"
                    variant="h3"
                  >
                    PAN
                  </Text>
                  <Text
                    className="mb-[5px] sm:ml-[0] ml-[94px] sm:mt-0 mt-2.5 not-italic text-blue_gray_900 text-left w-auto"
                    as="h3"
                    variant="h3"
                  >
                    Country
                  </Text>
                </div>
                <List
                  className="flex-col gap-[18.5px] grid items-center ml-3.5 md:ml-[0] mt-[13px] w-[98%]"
                  orientation="vertical"
                >
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <div className="border-2 border-blue_gray_200 border-solid h-[18px] md:mt-0 mt-[5px] rounded-[3px] w-[18px]"></div>
                    <Text
                      className="sm:flex-1 leading-[20.00px] md:ml-[0] ml-[30px] md:mt-0 mt-[5px] not-italic text-gray_600 text-left w-[8%] sm:w-full"
                      as="h3"
                      variant="h3"
                    >
                      Astu Technologies Private Limited
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[60px] not-italic text-gray_600 text-left w-auto"
                      as="h3"
                      variant="h3"
                    >
                      +918934834069
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[30px] not-italic text-gray_600 text-left w-auto"
                      as="h3"
                      variant="h3"
                    >
                      akshay.kota16@gmail.com
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[47px] md:mt-0 mt-0.5 not-italic text-gray_600 text-left w-auto"
                      as="h3"
                      variant="h3"
                    >
                      -
                    </Text>
                    <Text
                      className="ml-44 md:ml-[0] md:mt-0 mt-[3px] not-italic text-gray_600 text-left w-auto"
                      as="h3"
                      variant="h3"
                    >
                      -
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[120px] not-italic text-gray_600 text-left w-auto"
                      as="h3"
                      variant="h3"
                    >
                      India
                    </Text>
                    <div className="flex flex-col md:ml-[0] ml-[85px] md:mt-0 mt-[3px] relative w-[2%] md:w-full">
                      <Img
                        src="images/img_editnotefill0.svg"
                        className="h-6 mx-auto w-6"
                        alt="editnotefillZero"
                      />
                      <Text
                        className="mt-[-0.68px] not-italic text-center text-gray_600 w-auto z-[1]"
                        as="h5"
                        variant="h5"
                      >
                        Edit
                      </Text>
                    </div>
                    <div className="h-10 md:ml-[0] ml-[26px] md:mt-0 mt-[3px] relative w-[7%] md:w-full">
                      <Img
                        src="images/img_receiptlongfi_gray_600.svg"
                        className="h-6 mb-[-0.73px] mx-auto w-6 z-[1]"
                        alt="receiptlongfi"
                      />
                      <Text
                        className="mt-auto mx-auto not-italic text-center text-gray_600 w-auto"
                        as="h5"
                        variant="h5"
                      >
                        Create Invoice
                      </Text>
                    </div>
                    <div className="h-10 md:h-6 md:ml-[0] ml-[31px] md:mt-0 mt-[3px] relative w-[3%] md:w-full">
                      <Img
                        src="images/img_deletefill0wg.svg"
                        className="absolute h-6 inset-x-[0] mx-auto top-[0] w-6"
                        alt="deletefill0wg"
                      />
                      <Text
                        className="absolute bottom-[0] inset-x-[0] mx-auto not-italic text-center text-gray_600 w-max"
                        as="h5"
                        variant="h5"
                      >
                        Delete
                      </Text>
                    </div>
                  </div>
                  <Line className="self-center h-px bg-gray_100 w-full" />
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <div className="border-2 border-blue_gray_200 border-solid h-[18px] md:mt-0 mt-[5px] rounded-[3px] w-[18px]"></div>
                    <Text
                      className="sm:flex-1 leading-[20.00px] md:ml-[0] ml-[30px] md:mt-0 mt-1 not-italic text-gray_600 text-left w-[8%] sm:w-full"
                      as="h3"
                      variant="h3"
                    >
                      XYZ Technologies Private Limited
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[60px] md:mt-0 mt-0.5 not-italic text-gray_600 text-left w-auto"
                      as="h3"
                      variant="h3"
                    >
                      +918934834069
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[30px] md:mt-0 mt-0.5 not-italic text-gray_600 text-left w-auto"
                      as="h3"
                      variant="h3"
                    >
                      akshay93jaiswal@gmail.com
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[30px] not-italic text-gray_600 text-left w-auto"
                      as="h3"
                      variant="h3"
                    >
                      ABCDEFGHIJKLMNO
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[30px] not-italic text-gray_600 text-left w-auto"
                      as="h3"
                      variant="h3"
                    >
                      ABCDEFGHIJ
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[31px] not-italic text-gray_600 text-left w-auto"
                      as="h3"
                      variant="h3"
                    >
                      USA
                    </Text>
                    <div className="flex flex-col md:ml-[0] ml-[85px] relative w-[2%] md:w-full">
                      <Img
                        src="images/img_editnotefill0.svg"
                        className="h-6 mx-auto w-6"
                        alt="editnotefillZero"
                      />
                      <Text
                        className="mt-[-0.67px] not-italic text-center text-gray_600 w-auto z-[1]"
                        as="h5"
                        variant="h5"
                      >
                        Edit
                      </Text>
                    </div>
                    <div className="h-10 md:ml-[0] ml-[26px] relative w-[7%] md:w-full">
                      <Img
                        src="images/img_receiptlongfi_gray_600.svg"
                        className="h-6 mb-[-0.73px] mx-auto w-6 z-[1]"
                        alt="receiptlongfi"
                      />
                      <Text
                        className="mt-auto mx-auto not-italic text-center text-gray_600 w-auto"
                        as="h5"
                        variant="h5"
                      >
                        Create Invoice
                      </Text>
                    </div>
                    <div className="h-10 md:h-6 md:ml-[0] ml-[31px] relative w-[3%] md:w-full">
                      <Img
                        src="images/img_deletefill0wg.svg"
                        className="absolute h-6 inset-x-[0] mx-auto top-[0] w-6"
                        alt="deletefill0wg"
                      />
                      <Text
                        className="absolute bottom-[0] inset-x-[0] mx-auto not-italic text-center text-gray_600 w-max"
                        as="h5"
                        variant="h5"
                      >
                        Delete
                      </Text>
                    </div>
                  </div>
                  <Line className="self-center h-px bg-gray_100 w-full" />
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <div className="border-2 border-blue_gray_200 border-solid h-[18px] md:mt-0 mt-[5px] rounded-[3px] w-[18px]"></div>
                    <Text
                      className="sm:flex-1 leading-[20.00px] md:ml-[0] ml-[30px] md:mt-0 mt-1 not-italic text-gray_600 text-left w-[8%] sm:w-full"
                      as="h3"
                      variant="h3"
                    >
                      ABC Technologies Private Limited
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[60px] not-italic text-gray_600 text-left w-auto"
                      as="h3"
                      variant="h3"
                    >
                      +918934834069
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[30px] md:mt-0 mt-0.5 not-italic text-gray_600 text-left w-auto"
                      as="h3"
                      variant="h3"
                    >
                      akshay93jaiswal@gmail.com
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[30px] not-italic text-gray_600 text-left w-auto"
                      as="h3"
                      variant="h3"
                    >
                      ABCDEFGHIJKLMNO
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[30px] not-italic text-gray_600 text-left w-auto"
                      as="h3"
                      variant="h3"
                    >
                      ABCDEFGHIJ
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[31px] not-italic text-gray_600 text-left w-auto"
                      as="h3"
                      variant="h3"
                    >
                      India
                    </Text>
                    <div className="flex flex-col md:ml-[0] ml-[83px] relative w-[2%] md:w-full">
                      <Img
                        src="images/img_editnotefill0.svg"
                        className="h-6 mx-auto w-6"
                        alt="editnotefillZero"
                      />
                      <Text
                        className="mt-[-0.68px] not-italic text-center text-gray_600 w-auto z-[1]"
                        as="h5"
                        variant="h5"
                      >
                        Edit
                      </Text>
                    </div>
                    <div className="h-10 md:ml-[0] ml-[26px] relative w-[7%] md:w-full">
                      <Img
                        src="images/img_receiptlongfi_gray_600.svg"
                        className="h-6 mb-[-0.73px] mx-auto w-6 z-[1]"
                        alt="receiptlongfi"
                      />
                      <Text
                        className="mt-auto mx-auto not-italic text-center text-gray_600 w-auto"
                        as="h5"
                        variant="h5"
                      >
                        Create Invoice
                      </Text>
                    </div>
                    <div className="h-10 md:h-6 md:ml-[0] ml-[31px] relative w-[3%] md:w-full">
                      <Img
                        src="images/img_deletefill0wg.svg"
                        className="absolute h-6 inset-x-[0] mx-auto top-[0] w-6"
                        alt="deletefill0wg"
                      />
                      <Text
                        className="absolute bottom-[0] inset-x-[0] mx-auto not-italic text-center text-gray_600 w-max"
                        as="h5"
                        variant="h5"
                      >
                        Delete
                      </Text>
                    </div>
                  </div>
                  <Line className="self-center h-px bg-gray_100 w-full" />
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <div className="border-2 border-blue_gray_200 border-solid h-[18px] md:mt-0 mt-[5px] rounded-[3px] w-[18px]"></div>
                    <Text
                      className="sm:flex-1 leading-[20.00px] md:ml-[0] ml-[30px] md:mt-0 mt-1 not-italic text-gray_600 text-left w-[8%] sm:w-full"
                      as="h3"
                      variant="h3"
                    >
                      ABC Technologies Private Limited
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[60px] not-italic text-gray_600 text-left w-auto"
                      as="h3"
                      variant="h3"
                    >
                      +918934834069
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[30px] md:mt-0 mt-0.5 not-italic text-gray_600 text-left w-auto"
                      as="h3"
                      variant="h3"
                    >
                      akshay93jaiswal@gmail.com
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[30px] not-italic text-gray_600 text-left w-auto"
                      as="h3"
                      variant="h3"
                    >
                      ABCDEFGHIJKLMNO
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[30px] not-italic text-gray_600 text-left w-auto"
                      as="h3"
                      variant="h3"
                    >
                      ABCDEFGHIJ
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[31px] not-italic text-gray_600 text-left w-auto"
                      as="h3"
                      variant="h3"
                    >
                      India
                    </Text>
                    <div className="flex flex-col md:ml-[0] ml-[83px] relative w-[2%] md:w-full">
                      <Img
                        src="images/img_editnotefill0.svg"
                        className="h-6 mx-auto w-6"
                        alt="editnotefillZero"
                      />
                      <Text
                        className="mt-[-0.68px] not-italic text-center text-gray_600 w-auto z-[1]"
                        as="h5"
                        variant="h5"
                      >
                        Edit
                      </Text>
                    </div>
                    <div className="h-10 md:ml-[0] ml-[26px] relative w-[7%] md:w-full">
                      <Img
                        src="images/img_receiptlongfi_gray_600.svg"
                        className="h-6 mb-[-0.73px] mx-auto w-6 z-[1]"
                        alt="receiptlongfi"
                      />
                      <Text
                        className="mt-auto mx-auto not-italic text-center text-gray_600 w-auto"
                        as="h5"
                        variant="h5"
                      >
                        Create Invoice
                      </Text>
                    </div>
                    <div className="h-10 md:h-6 md:ml-[0] ml-[31px] relative w-[3%] md:w-full">
                      <Img
                        src="images/img_deletefill0wg.svg"
                        className="absolute h-6 inset-x-[0] mx-auto top-[0] w-6"
                        alt="deletefill0wg"
                      />
                      <Text
                        className="absolute bottom-[0] inset-x-[0] mx-auto not-italic text-center text-gray_600 w-max"
                        as="h5"
                        variant="h5"
                      >
                        Delete
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div className="h-16 md:h-[83px] md:ml-[0] ml-[925px] mt-[19px] relative w-[31%] sm:w-full">
              <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto p-2.5 right-[0] self-stretch w-auto">
                <Button
                  className="capitalize cursor-pointer font-normal h-11 not-italic text-base text-center text-white_A700 w-[180px]"
                  shape="RoundedBorder8"
                  size="sm"
                  variant="FillBlue800"
                >
                  Add Client
                </Button>
              </div>
              <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto p-2.5 self-stretch w-auto">
                <Button
                  className="capitalize cursor-pointer font-normal h-11 not-italic text-base text-blue_800 text-center w-[180px]"
                  shape="RoundedBorder8"
                  size="sm"
                  variant="OutlineBlue800"
                >
                  Upload clients
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoicePage;
