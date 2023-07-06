import { DeleteOutlined, FileImageOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { confirmAlert } from "react-confirm-alert";
import { useUserDataContext } from "../../context/UserDataContextProvider";

const BeforeUpload = ({ hint, htmlFor, title }) => {
    // component for when no file is selected
    return (
        <label htmlFor={htmlFor}
            className="mr-0 flex flex-col gap-5 items-center w-full max-w-[200px] h-[180px] bg-[#010222] border-2 border-[#324463] cursor-pointer dark:hover:bg-bray-800 hover:border-[#87FF4F] :border-gray-500">
            <div className="flex items-center w-full justify-between pl-[14px]">
                <div className="text-white">{title}</div>
                <svg width="50" height="50" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SlidersHorizontal">
                        <path id="Vector" d="M37 27C37 27.221 36.9122 27.433 36.7559 27.5893C36.5996 27.7455 36.3877 27.8333 36.1667 27.8333H27.8333V36.1667C27.8333 36.3877 27.7455 36.5996 27.5893 36.7559C27.433 36.9122 27.221 37 27 37C26.779 37 26.567 36.9122 26.4107 36.7559C26.2545 36.5996 26.1667 36.3877 26.1667 36.1667V27.8333H17.8333C17.6123 27.8333 17.4004 27.7455 17.2441 27.5893C17.0878 27.433 17 27.221 17 27C17 26.779 17.0878 26.567 17.2441 26.4107C17.4004 26.2545 17.6123 26.1667 17.8333 26.1667H26.1667V17.8333C26.1667 17.6123 26.2545 17.4004 26.4107 17.2441C26.567 17.0878 26.779 17 27 17C27.221 17 27.433 17.0878 27.5893 17.2441C27.7455 17.4004 27.8333 17.6123 27.8333 17.8333V26.1667H36.1667C36.3877 26.1667 36.5996 26.2545 36.7559 26.4107C36.9122 26.567 37 26.779 37 27Z" fill="white" />
                    </g>
                </svg>
            </div>
            <div className="flex flex-col justify-center items-center">
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                    className="font-semibold">Click to upload</span> or drag and
                    drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{hint}</p>
            </div>
        </label>
    )
}

const AfterUpload = ({ file, setFile, onConfirmationPage, onEditPage }) => {
    // component for when file has been selected or it is found in the context

    const { usersProjects, setUsersProjects } = useUserDataContext();
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <FileImageOutlined style={{ fontSize: '40px', color: '#08c', padding: '20px' }} />
            <p className="text-black text-center text-ellipsis whitespace-nowrap overflow-hidden max-w-[160px]">{file.file_name}</p>
            <p className="text-black text-center">{'~'}{Math.ceil(file?.file_binary?.length / 1024 / 1024)}{' Mb'}</p>
            {/*
                if this component is on the edit page, then the files are already uploaded and a confirmation is needed to delete them,
                but if on upload page then confirmation is not needed;
                if on confirmation page do not show delete bubtton at all
            */}
            {!onConfirmationPage && (onEditPage ?
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        confirmAlert({
                            title: 'Confirm to delete',
                            message: `Are you sure you want to delete this file?`,
                            buttons: [
                                {
                                    label: 'Yes',
                                    onClick: () => {
                                        const old_files = usersProjects[id].files; // current files from the context
                                        // filter out (delete) the one on which the trash button has been clicked and update the context
                                        const new_files = Object.keys(old_files)
                                            .filter(key => key !== file.file_type)
                                            .reduce((result, key) => ({
                                                ...result,
                                                [key]: old_files[key]
                                            }), {});
                                        // console.log(new_files);
                                        // update the context
                                        setUsersProjects(prevState => ({
                                            ...prevState,
                                            [id]: {
                                                ...usersProjects[id],
                                                files: new_files
                                            }
                                        }));
                                    }
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
                <button className="hover:scale-[1.1] transition duration-100"
                    onClick={() => {
                        // this setFile is not a setState directly!!! it leads to the  fileToBinaryUpload function
                        setFile(null);
                    }}>
                    <DeleteOutlined style={{ fontSize: '30px', color: '#7d1d1d', padding: '20px' }} />
                </button>)
            }
        </>
    )
}

const FileInputField = ({ inputFiledId, setFile }) => {

    return (
        <input id={inputFiledId}
            type="file"
            className="hidden"
            onChange={(e) => {
                if (e.target.files[0]) {
                    setFile(e);
                    e.target.value = null; // clear input field right away so that it works again
                }
            }} />
    )
}

export const InputElement = ({ title, file, setFile, inputFiledId }) => {

    const router = useRouter();
    const onConfirmationPage = router.pathname.includes("confirmation-page");
    const onEditPage = router.pathname.includes("edit-project");

    if (onConfirmationPage) {
        return (
            <>
                {file &&
                    <div className="">
                        <label
                            className="mr-0 block uppercase tracking-wide text-xs font-bold mb-2 mt-10 text-center">
                            {title}
                        </label>
                        <div className="text-center items-center w-full text-sm">
                            {file ?
                                <AfterUpload onConfirmationPage={onConfirmationPage} onEditPage={onEditPage} file={file}
                                    setFile={setFile}></AfterUpload>
                                :
                                <BeforeUpload htmlFor={inputFiledId}
                                    hint="SVG, PNG, JPG or GIF (MAX. 800x400px)"></BeforeUpload>
                            }
                            <FileInputField inputFiledId={inputFiledId} onEditPage={onEditPage}
                                setFile={setFile}></FileInputField>
                        </div>
                    </div>
                }
            </>
        )
    } else {
        return (
            <div>
                <div className="text-center items-center w-full text-sm">
                    {file ?
                        <AfterUpload onConfirmationPage={onConfirmationPage} onEditPage={onEditPage} file={file}
                            setFile={setFile}></AfterUpload>
                        :
                        <div>
                            <BeforeUpload title={title} htmlFor={inputFiledId}
                            hint="SVG, PNG, JPG or GIF (MAX. 800x400px)"></BeforeUpload>
                        </div>
                    }
                    <FileInputField inputFiledId={inputFiledId} onEditPage={onEditPage}
                        setFile={setFile}></FileInputField>
                </div>
            </div>
        )
    }
}