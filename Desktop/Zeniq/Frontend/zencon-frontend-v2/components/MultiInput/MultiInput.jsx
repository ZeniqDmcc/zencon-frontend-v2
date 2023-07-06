import { useRouter } from "next/router";
import React, { useEffect } from 'react';
import Select from 'react-select';


import { DeleteOutlined } from "@ant-design/icons";
import { confirmAlert } from "react-confirm-alert";
import { useUploadProjectContext } from "../../context/UploadProjectContextProvider";
import { useUserDataContext } from "../../context/UserDataContextProvider";
import { api_backend } from "../../utils/Constants/BackendURLs";


export default function MultiInput({ readOnly = false }) {

    const addButtonStyle = "font-Hanson font-normal mx-auto uppercase text-[16px] leading-[16.16px] text-center w-[240px] h-[52px] text-[#fff] border-2 flex justify-center items-center border-white hover:bg-[#fff] hover:text-[#121212] hover:cursor-pointer 1024px:w-[214px] 1024px:h-[45px] 1024px:text-[14px]"
    // these are fully custom objects for each option, although "label" and "value" names are fixed
    const right_options = [
        { value: 'Participant', label: 'Participant', name: "rights_in_project" },
        { value: 'Maintainer', label: 'Maintainer', name: "rights_in_project" },
        { value: 'Owner', label: 'Owner', name: "rights_in_project" }
    ];

    const { devsInProject, setDevsInProject } = useUploadProjectContext();
    const { ethAddr, userType, allDevs, setAllDevs } = useUserDataContext();
    const router = useRouter();

    const authData = {
        user_wallet: ethAddr,
        user_type: userType
    };

    useEffect(() => {
        if (authData.user_wallet) {
            fetch(`${api_backend}/project/get_devs`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(authData),
            })
                .then((response) => response.json())
                .then(data => {
                    // console.log("devs retrieved");
                    // setProjectsFetched(true);
                    // console.log(data);
                    if (data?.devs) {
                        // convertBinaryToFile(data.projects_with_files);
                        setAllDevs(data.devs.map(address => ({
                            value: address,
                            label: address,
                            name: "dev_wallet_address"
                        })));
                    }
                })
                .catch((err) => {
                    console.log(err)
                });
        } else {
            router.push("/");
        }

        if (readOnly) {
            setDevsInProject(devsInProject.filter(dev => dev.dev_wallet_address !== ""));
        }

    }, []);

    const selectStyles = {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: '#fff', // Set the background color based on the state
            borderColor: '#ccc',
            // Add other styles as needed
        }),
    };

    const handleInputChange = (e, index) => {
        const { name, value } = e;
        const inputList = [...devsInProject];
        inputList[index][name] = value;
        setDevsInProject(inputList);
        // console.log(devsInProject);
    };
    const handleRemoveClick = (e, index) => {
        // console.log(index)
        e.preventDefault();
        const inputList = [...devsInProject];
        // console.log(inputList[index]);
        inputList.splice(index, 1);
        // console.log(inputList)
        setDevsInProject(inputList);
    };
    const handleAddClick = (e) => {
        e.preventDefault();
        setDevsInProject([
            ...devsInProject,
            { dev_wallet_address: '', rights_in_project: 'Participant' },
        ]);
    };

    // Add Input Field Button

    if (allDevs.length > 0) {
        return (
            <>
                {!readOnly && <div className="text-center mt-6">
                    {/* <Paragraph text="Who else is in the project?" /> */}
                    <p className='font-HeroSansRegular leading-[30px] text-[#fff] text-[18px] font-light 940px:leading-[25px] mb-8'>Who else is in the project?</p>
                    <button
                        className={addButtonStyle}
                        onClick={handleAddClick}
                    >
                        Add Input Field
                    </button>
                </div>}
                {/*  */}
                <div className="flex flex-wrap mb-12 480px:mb-0 mt-12">
                    {devsInProject && devsInProject.map((dev, i) => {
                        return (
                            dev.dev_wallet_address !== ethAddr &&
                            <div className="flex w-full mb-6 flex-wrap p-0 shadow-lg relative"
                                // for new fields which will be empty when they get added, the key is the index of the map function
                                key={dev.dev_wallet_address === "" ? i : dev.dev_wallet_address}>
                                <div className="w-full lg:w-1/2 mb-6 lg:mb-0 grow">
                                    <label
                                        className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="grid-city">
                                        Username or Wallet address
                                    </label>
                                    <Select
                                        isDisabled={readOnly}
                                        defaultValue={allDevs.filter(allDevsDev => allDevsDev.value === dev.dev_wallet_address)}
                                        options={allDevs}
                                        isOptionDisabled={(option) => JSON.stringify(devsInProject).includes(option.value)}
                                        styles={selectStyles}
                                        onChange={(e) => handleInputChange(e, i)} />
                                </div>

                                <div
                                    className="w-full lg:w-1/2 lg:mb-0 grow flex items-center flex-wrap xs:flex-nowrap">
                                    <div className="relative w-full lg:w-1/3 lg:px-3 xs:mb-0 mb-6 grow">
                                        <label
                                            className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                                            htmlFor="grid-city">
                                            Right level in project
                                        </label>
                                        <Select
                                            defaultValue={right_options.filter(option => option.value === dev.rights_in_project)}
                                            isSearchable={false}
                                            isDisabled={readOnly}
                                            name={"rights"}
                                            onChange={(e) => handleInputChange(e, i)}
                                            options={right_options}
                                            className="bg-[#000]"
                                        />
                                    </div>
                                    <div className="absolute right-[-80px] top-[25px]">
                                        {!readOnly && <div className="h-full w-full lg:w-1/3 lg:px-3 lg:mb-0 ">
                                            <div className="flex flex-col justify-center xs:justify-end items-end h-full">
                                                {dev.dev_wallet_address !== '' && !router.pathname.includes("upload-project") ?
                                                    <button
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            // console.log(dev.dev_wallet_address);
                                                            confirmAlert({
                                                                title: 'Confirm to delete',
                                                                message: `Are you sure you want to remove this developer (${dev.dev_wallet_address}) from the project?`,
                                                                buttons: [
                                                                    {
                                                                        label: 'Yes',
                                                                        onClick: () => handleRemoveClick(e, i)
                                                                    },
                                                                    {
                                                                        label: 'No'
                                                                    }
                                                                ]
                                                            });
                                                        }}
                                                        className="hover:scale-[1.1] transition duration-100"
                                                    >
                                                        <DeleteOutlined style={{ fontSize: '30px', color: '#7d1d1d' }} />
                                                    </button>
                                                    :
                                                    <button
                                                        className="mt-1"
                                                        onClick={(e) => handleRemoveClick(e, i)}
                                                    >
                                                        <svg width="24" height="26" viewBox="0 0 24 26" className="hover:fill-[#FF6060]" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 4H18V3C18 2.20435 17.6839 1.44129 17.1213 0.87868C16.5587 0.316071 15.7956 0 15 0H9C8.20435 0 7.44129 0.316071 6.87868 0.87868C6.31607 1.44129 6 2.20435 6 3V4H1C0.734784 4 0.48043 4.10536 0.292893 4.29289C0.105357 4.48043 0 4.73478 0 5C0 5.26522 0.105357 5.51957 0.292893 5.70711C0.48043 5.89464 0.734784 6 1 6H2V24C2 24.5304 2.21071 25.0391 2.58579 25.4142C2.96086 25.7893 3.46957 26 4 26H20C20.5304 26 21.0391 25.7893 21.4142 25.4142C21.7893 25.0391 22 24.5304 22 24V6H23C23.2652 6 23.5196 5.89464 23.7071 5.70711C23.8946 5.51957 24 5.26522 24 5C24 4.73478 23.8946 4.48043 23.7071 4.29289C23.5196 4.10536 23.2652 4 23 4ZM8 3C8 2.73478 8.10536 2.48043 8.29289 2.29289C8.48043 2.10536 8.73478 2 9 2H15C15.2652 2 15.5196 2.10536 15.7071 2.29289C15.8946 2.48043 16 2.73478 16 3V4H8V3ZM20 24H4V6H20V24ZM10 11V19C10 19.2652 9.89464 19.5196 9.70711 19.7071C9.51957 19.8946 9.26522 20 9 20C8.73478 20 8.48043 19.8946 8.29289 19.7071C8.10536 19.5196 8 19.2652 8 19V11C8 10.7348 8.10536 10.4804 8.29289 10.2929C8.48043 10.1054 8.73478 10 9 10C9.26522 10 9.51957 10.1054 9.70711 10.2929C9.89464 10.4804 10 10.7348 10 11ZM16 11V19C16 19.2652 15.8946 19.5196 15.7071 19.7071C15.5196 19.8946 15.2652 20 15 20C14.7348 20 14.4804 19.8946 14.2929 19.7071C14.1054 19.5196 14 19.2652 14 19V11C14 10.7348 14.1054 10.4804 14.2929 10.2929C14.4804 10.1054 14.7348 10 15 10C15.2652 10 15.5196 10.1054 15.7071 10.2929C15.8946 10.4804 16 10.7348 16 11Z" fill="white" />
                                                        </svg>

                                                        {/* <DeleteOutlined style={{ fontSize: '30px', color: '#7d1d1d' }} /> */}
                                                    </button>
                                                }
                                                {/*<button*/}
                                                {/*    className=""*/}
                                                {/*    onClick={(e) => handleRemoveClick(e, i)}*/}
                                                {/*>*/}
                                                {/*    <DeleteOutlined style={{fontSize: '30px', color: '#7d1d1d'}}/>*/}
                                                {/*</button>*/}
                                            </div>
                                        </div>}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </>
        );
    }
}

