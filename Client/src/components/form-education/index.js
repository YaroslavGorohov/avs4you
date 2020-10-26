import React from 'react';
import styled from "styled-components";
import Text from '../text';
import Input from '../input';
import Link from '../link';
import Button from '../button';
import CloseIcon from '../../images/common/icons/close-popup.svg';
import InfoPopupForm from '../info-popup-form';
import ReCAPTCHA from "react-google-recaptcha";

import {RecaptchaKeys, AjaxUrls} from '../../../static/static-data';

const StyledForm = styled.div`
    box-shadow: 3px 3px 24px #00000014;
    padding: 40px;
    background-color: #FFF9F1;
    width: 100%;
    box-sizing: border-box;
    margin: auto;
    margin-top: 30px;
    display: block;

    .filesFormatWrapper{
        max-width:500px;
        margin-bottom: 24px;
        margin-top: 10px;
    }

    .agreeTermsWrapper{
        max-width:190px;
        margin-top: 16px;
    }

    .recaptchaWrapper{
        margin-bottom: 24px
    }

    .smallText{
        color:#666666;
        font-size:12px;
    }

    .attachFileWrapper{
        display:flex;
        align-items: center;

        input{
            opacity: 0;
            visibility: hidden;
            position: absolute;
        }

        .removeFile{
            display:none;
            background-image: url(${CloseIcon});
            background-size: contain;
            background-repeat: no-repeat;
            background-position:50%;
            width:16px;
            height:16px;
            margin-left: 10px;
            cursor:pointer;
        }

        &.hasFile{
            .removeFile{
                display: inline-flex;
            }

            .chooseFileButton{
                display:none;
            }

            label{
                .fileName{
                    margin-left:0;
                }
            }
        }

        &.deleted{
            label{
                .fileName{
                    text-decoration: line-through;
                }
            }

            .removeFile{
                display:none;
            }
        }

        label{
            display: inline-flex;
            margin-top: 5px;
            margin-bottom: 5px;
            cursor:pointer;
            align-items: center;
                
            &:last-child{
                margin-bottom:0;
            }

            .chooseFileButton{
                color: #555555;
                padding: 3px 25px;
                border-radius: 3px;
                border: 1px solid #CECECE;
                display: table-cell;
                font-size: 13px;
                background-color: #fff;
            }

            .fileName{
                color:#555555;
                font-size:12px;
                margin-left: 10px;
            }
        }
    }

    .addFileButton{
        text-decoration:underline;
        font-size:13px;
        color:#157BF2;
        display: table;
        padding: 10px;
        padding-left: 0;
        cursor: pointer;

        &.disable{
            display:none;
        }
    }

    .formHeader{
        color:#161922;
        font-size:24px;
        padding-bottom: 25px;
        font-weight:600;
    }

    .inputsWrapper{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;

        &.two{
            grid-template-columns: 1fr 1fr; 
        }
    }

    .formInput{
        width: 100%;  
        margin: 0;
        margin-bottom: 25px;
        position:relative;
        z-index:1;

        &.textArea .main-input{
            max-width: 100%;
            min-width: 100%;
            height:160px;
            position: relative;
            z-index: 1;
        }

        &.focus{
            .label-input{
                background-color:transparent;
                z-index:1;

                &:before{
                    content: "";
                    width: 100%;
                    height: 1px;
                    background-color: #ffffff;
                    display: block;
                    top: 7px;
                    position: absolute;
                    z-index: -1;
                    left: 0;
                    right: 0;
                    margin: auto;
                }
            }
        }
    }

    .main-input{
        border-color: #CECECE;
    }

    .errorBlock{

        &:before{
            content: none;
        }
    }

    @media (max-width: 700px) {
        .inputsWrapper, .inputsWrapper.two{
            grid-template-columns: 1fr;
            grid-gap:0;
        }

        .formHeader{
            font-size:18px;
        }
    }

    @media (max-width: 460px) {
        padding: 20px;

        .formHeader{
            text-align:center;
        }
    }
`;

/**
* Enum for employee activation status.
* @readonly
*/
const ErrorStatus = Object.freeze({
    NoError: 0,
    Empty: 1,
    Incorrect: 2
});

class FormEducation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: { value: "", status: ErrorStatus.NoError, inputClassName: "" },
            email: { value: "", status: ErrorStatus.NoError, inputClassName: "" },
            comment: { value: "", status: ErrorStatus.NoError, inputClassName: "" },
            occupation: { value: "", status: ErrorStatus.NoError, inputClassName: "" },
            institution: { value: "", status: ErrorStatus.NoError, inputClassName: "" },
            subscriptions: { value: "", status: ErrorStatus.NoError, inputClassName: "" },
            recaptchaValue: "",

            file: {},
            fileInputsId: ["file0"],
            showAddFile: true,

            formSended: false
        };

        this.recaptchaRef = React.createRef();
        this.fileInputs = this.state.fileInputsId.map((id) => <input id={id} name={id} type="file" onChange={this.onChangeFileUpload} />);

        this.nameErrorText = "";
        this.emailErrorText = "";
        this.commentErrorText = "";
        this.occupationErrorText = "";
        this.institutionErrorText = "";
        this.subscriptionsErrorText = "";

        this.regexpEmail = new RegExp('^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$', 'i')

    }

    request = () => {
        if (this.verifyData()) {

            if(Object.keys(this.state.file).length != 0) {
                let formData = new FormData();
                let fileNames = [];

                for(let fileId in this.state.file){
                    let file = this.state.file[fileId];

                    if(!file.deleted){
                        formData.append(file.name, file);
                        fileNames.push(file.name);
                    }
                }
                this.sendFile(formData).then(
                    this.sendForm({
                        UserEmail: this.state.email.value,
                        UserName: this.state.name.value,
                        Comment: this.state.comment.value,
                        numOfSubs: this.state.subscriptions.value,
                        RecaptchaValue: this.state.recaptchaValue,
                        Occupation: this.state.occupation.value,
                        Institution: this.state.institution.value,
                        MailPatternName: "ru-education.html",
                        MailType: "education",
                        FileNames: fileNames
                    })
                ).catch(
                    console.log()
                );
            } else {
                this.sendForm({
                    UserEmail: this.state.email.value,
                    UserName: this.state.name.value,
                    Comment: this.state.comment.value,
                    numOfSubs: this.state.subscriptions.value,
                    Occupation: this.state.occupation.value,
                    Institution: this.state.institution.value,
                    RecaptchaValue: this.state.recaptchaValue,
                    MailPatternName: "ru-education.html",
                    MailType: "education"
                })
            }

        } else {
        }
    };

    isEmpty = (value) => {
        return !value || !value.length;
    }

    isEmailInvalid = (value) => {
        return !value.match(this.regexpEmail)
    }

    validate = (inputName, value) => {
        switch (inputName) {
            case "name":
                return this.isEmpty(value) ? ErrorStatus.Empty : ErrorStatus.NoError;
            case "email":
                if (this.isEmpty(value))
                    return ErrorStatus.Empty;
                else if (this.isEmailInvalid(value))
                    return ErrorStatus.Incorrect;
                else
                    return ErrorStatus.NoError;
            default:
                return ErrorStatus.NoError;
        }
    }

    verifyData = () => {
        const nameStatus = this.validate("name", this.state.name.value);
        this.setError("name", nameStatus);
        this.updateInputClassName("name", nameStatus);
        this.updateErrorText("name", nameStatus);

        const emailStatus = this.validate("email", this.state.email.value);
        this.setError("email", emailStatus);
        this.updateInputClassName("email", emailStatus);
        this.updateErrorText("email", emailStatus);

        let formValid = nameStatus === ErrorStatus.NoError &&
            emailStatus === ErrorStatus.NoError &&
            this.state.recaptchaValue.length > 0;

        return formValid;
    }

    updateInputClassName = (inputName, status) => {
        if (status === ErrorStatus.Empty) {
            this.setFocusInput(inputName, "error");

        } else if (status === ErrorStatus.Incorrect) {
            this.setFocusInput(inputName, "focus error");

        } else if (this.state[inputName].value) {
            this.setFocusInput(inputName, "focus");

        } else {
            this.setFocusInput(inputName, "");
        }
    }

    updateErrorText = (inputName, status) => {

        switch (status) {
            case ErrorStatus.Empty:
                this.setErrorText(inputName, "is empty");
                break
            case ErrorStatus.Incorrect:
                this.setErrorText(inputName, "is incorrect");
                break
            default:
                break
        }
    }

    setInputData = (inputName, value) => {
        const field = this.state[inputName];

        if (!field) throw "Unknown name";

        this.setState(
            {
                [inputName]: { ...field, value: value }
            }
        );
    }

    setError = (inputName, newStatus) => {
        const field = this.state[inputName];

        if (!field) throw "Unknown name";

        if (field.status !== newStatus) {
            this.setState(
                {
                    [inputName]: { ...field, status: newStatus }
                }
            )
        }
    }

    setFocusInput = (inputName, className) => {
        const field = this.state[inputName];

        if (!field) throw "Unknown name";

        this.setState({
            [inputName]: { ...field, inputClassName: className }
        })
    }

    setErrorText = (inputName, error) => {
        switch (inputName) {
            case "name":
                this.nameErrorText = `name ${error}`;
                break
            case "email":
                this.emailErrorText = `email ${error}`
                break
            case "comment":
                this.commentErrorText = `comment ${error}`
                break
            case "subscriptions":
                this.subscriptionsErrorText = `comment ${error}`
                break
            default:
                break
        }
    }

    onChangeInput = (e) => {
        this.setInputData(e.target.name, e.target.value);
    }

    OnChangeRecaptcha = () => {
        this.setState({
            recaptchaValue: this.recaptchaRef.current.getValue()
        })
    }

    onChangeFileUpload = (e) => {

        const field = this.state.file;
        const inputId = e.target.id;
        const file = e.target.files[0];

        this.setState({
            file: { ...field, [inputId]: file }
        })
    }

    onBlurInput = (e) => {
        let status = ErrorStatus.NoError;

        if (e.target.name == "email" && e.target.value && this.isEmailInvalid(e.target.value)){
            status = ErrorStatus.Incorrect;
        }

        this.setError(e.target.name, status);
        this.updateInputClassName(e.target.name, status);
        this.updateErrorText(e.target.name, status);
    }

    onFocusInput = (e) => {
        this.setError(e.target.name, ErrorStatus.NoError);
        this.setFocusInput(e.target.name, "focus")
    };

    onKeyPress = (event) => {
        if (event.key === "Enter") {
            this.request();
        }
    };

    onClickRemove = (e) => {

        const field = this.state.file;
        const inputId = e.target.id.split("-")[0];
        const deletedFileName = this.state.file[inputId].name;

        this.setState({
            file: { ...field, [inputId]: { deleted: true, name: deletedFileName } }
        });
    }

    onClickAddFile = () => {
        const field = this.state.fileInputsId;

        if (field.length < 10) {
            field.push("file" + field.length);

            this.setState({
                fileInputsId: field
            })
        } else {
            this.setState({
                showAddFile: false
            })
        }
    };

    onClick = () => {
        this.request();
    };

    sendFile = async (formData) => {
        let url = AjaxUrls.domain + "api/file";

        try {
            const response = await fetch(url, {
                method: 'POST',
                body: formData,
            });

            let responseTest = await response.text();

            if (responseTest.indexOf("error") > -1) {
                throw new Error("Send file error");
            } else {
                console.log("Files sended")
                return true;
            }

        } catch (error) {
            throw new Error(error);
        }
    };

    sendForm = async (data) => {

        let url = AjaxUrls.domain + "api/email";

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(data),
            });

            let responseTest = await response.text();

            if (false) { //responseTest.indexOf("Error") > -1
                console.log(responseTest)
            } else {
                this.setState({
                    formSended: true
                })
                console.log("Email sended")
            }

        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const { formHeader, formName, formEmailAddress, formOccupation, formInstitution, formNumberOfSub } = this.props;
        return (
            <StyledForm>
                {this.state.formSended
                    ?
                    <InfoPopupForm />
                    : <div>
                        <Text as="h2" className="formHeader">
                            {this.props.formHeader}
                        </Text>
                        <div className="inputsWrapper two">
                            <Input
                                tabIndex="0"

                                inputName="name"
                                inputLabel={this.props.formName}

                                value={this.state.name.value}
                                inputClassName={this.state.name.inputClassName}
                                errorText={this.nameErrorText}
                                onKeyPress={this.onKeyPress}
                                onChange={this.onChangeInput}
                                onBlur={this.onBlurInput}
                                onFocus={this.onFocusInput}

                                className="formInput"
                                required={true}

                            />
                            <Input
                                tabIndex="1"

                                inputName="email"
                                inputLabel={this.props.formEmailAddress}

                                value={this.state.email.value}
                                inputClassName={this.state.email.inputClassName}
                                errorText={this.emailErrorText}
                                onKeyPress={this.onKeyPress}
                                onChange={this.onChangeInput}
                                onBlur={this.onBlurInput}
                                onFocus={this.onFocusInput}

                                className="formInput"
                                required={true}
                            />

                        </div>
                        <div className="inputsWrapper">
                            <Input
                                tabIndex="0"

                                inputName="occupation"
                                inputLabel={this.props.formOccupation}

                                value={this.state.occupation.value}
                                inputClassName={this.state.occupation.inputClassName}
                                errorText={this.occupationErrorText}
                                onKeyPress={this.onKeyPress}
                                onChange={this.onChangeInput}
                                onBlur={this.onBlurInput}
                                onFocus={this.onFocusInput}

                                className="formInput"
                                required={false}

                            />
                            <Input
                                tabIndex="1"

                                inputName="institution"
                                inputLabel={this.props.formInstitution}

                                value={this.state.institution.value}
                                inputClassName={this.state.institution.inputClassName}
                                errorText={this.institutionErrorText}
                                onKeyPress={this.onKeyPress}
                                onChange={this.onChangeInput}
                                onBlur={this.onBlurInput}
                                onFocus={this.onFocusInput}

                                className="formInput"
                                required={false}
                            />

                            <Input
                                tabIndex="0"

                                inputName="subscriptions"
                                inputLabel={this.props.formNumberOfSub}

                                value={this.state.subscriptions.value}
                                inputClassName={this.state.subscriptions.inputClassName}
                                errorText={this.subscriptionsErrorText}
                                onKeyPress={this.onKeyPress}
                                onChange={this.onChangeInput}
                                onBlur={this.onBlurInput}
                                onFocus={this.onFocusInput}

                                className="formInput"
                            />

                        </div>
                        <Input
                            as="textarea"
                            tabIndex="2"

                            inputName="comment"
                            inputLabel=""
                            placeholder={this.props.formComment}

                            value={this.state.comment.value}
                            inputClassName={this.state.comment.inputClassName}
                            errorText={this.commentErrorText}
                            onKeyPress={this.onKeyPress}
                            onChange={this.onChangeInput}
                            onBlur={this.onBlurInput}
                            onFocus={this.onFocusInput}

                            className="formInput textArea"
                        />

                        {/*{this.state.fileInputsId.map((id) =>
                            <div key={"attachFileWrapper" + id}
                                className={[
                                    "attachFileWrapper ",
                                    this.state.file[id] ? " hasFile " : " noFile ",
                                    this.state.file[id] && this.state.file[id].deleted ? " deleted" : ""
                                ]}>

                                <input id={id} name={id} type="file" onChange={this.onChangeFileUpload} />
                                <label htmlFor={id}>
                                    <div className="chooseFileButton">Choose file</div>
                                    <Text className="fileName">{this.state.file[id] ? this.state.file[id].name : "No file selected"}</Text>
                                </label>
                                <div id={id + "-remove"} onClick={this.onClickRemove} className="removeFile"></div>
                            </div>
                        )}

                        <Text className={["addFileButton", this.state.showAddFile ? "" : "disable"]} onClick={this.onClickAddFile}>Add file</Text>
                        <div className="filesFormatWrapper">
                            <Text className="smallText">
                                Upload log-files (txt, log), documents (doc, docx, pdf) and image files (bmp, png, gif, jpeg).
                                Other file types have to be packed using a zip-archiver to be accepted. Max file size 5 Mb.
                            </Text>
                            </div>*/}

                        <div className="recaptchaWrapper">
                            <ReCAPTCHA
                                ref={this.recaptchaRef}
                                onChange={this.OnChangeRecaptcha}
                                sitekey={RecaptchaKeys.public}
                            />
                        </div>

                        <Button
                            tabIndex="1"
                            className="getCouponButton"
                            onClick={this.onClick}
                            backgroundColor="blue"
                            padding="13px 24px"
                            fontSize={14}
                            textTransform="uppercase"
                        >
                            {this.props.formButton}
                        </Button>
                        <div className="agreeTermsWrapper">
                            <Text className="smallText">
                        {this.props.formAgreeTermsWrapper} <Link to="/privacy.aspx" target="_blank">{this.props.formAgreeLink}</Link>.
                            </Text>
                        </div>
                    </div>
                }
            </StyledForm>
        )
    }
}

export default FormEducation;