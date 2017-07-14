	div.dropzone-oval {
        -webkit-perspective: 1000;
        border-style: solid;
        border-color: rgb(32, 133, 212);
        border-width: 3px;
        width: 55px;
        height: 55px;
        border-radius: 50%;
        float: left;
        margin-right: 2px;
        display: table-cell;
        text-align: center;
        vertical-align: middle;
    }  
    .NotificationError {
        opacity: 1;
        background-color:rgb(207, 7, 7);
    }
	.NotificationUploading {
		opacity: 1;
		background-color: rgb(92, 208, 218);
	}
	.NotificationSuccess {
		opacity: 1;
		background-color: rgb(7, 208, 7);
	}
    div.notification-oval {
        width: 45px;
        height: 45px;
		margin-top: 2px;
        border-radius: 50%;
        text-align: center;
        display: inline-block;
    }    
    ul.dropzone-oval-list-info {
        margin: 0;
        padding: 0;
        list-style-type: none;
        position: relative;
        top: 5px;
    }
    div.dropzone-list-div {
       overflow: hidden;
	   border-radius: 7px;
	   padding: 5px;
	   margin-bottom: 2px;
	   background-color: #fff;
	   border: 1px solid #179B73;
	   -webkit-box-shadow: 1px 1px 4px rgba(0,0,0,0.16);
	   box-shadow: 1px 1px 4px rgba(0,0,0,0.16);
    }
   
    div.dropzone-list-icon {
        max-width: 20%;
        max-height: 60px;
        margin-top: 10px;
        margin-left: 15px;
    }
    .dropzone-left {
        float: left;
    }
    .dropzone-right {
        float: right;
    }
    div.progress-container {
        width: 100%;
    }
    
    .dropzone-progress {
        width: 85%;
        box-sizing: initial;
        -webkit-box-sizing: initial;
        position: relative;
        margin: 4px 0px 0 0;
        position: relative;
        background: #E7E7E7;
        -moz-border-radius: 25px;
        -webkit-border-radius: 25px;
        border-radius: 25px;
        padding: 2px;
        -webkit-box-shadow: inset 0 -1px 1px rgba(255,255,255,0.3);
        -moz-box-shadow: inset 0 -1px 1px rgba(255,255,255,0.3);
        box-shadow: inset 0 -1px 1px rgba(255,255,255,0.3);
		margin-bottom: 0px !important;
    }
    .orange > span {
        background-color: #F40909;
		background-image: -moz-linear-gradient(top, #f1a165, #f36d0a);
		background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0, #DB5656),color-stop(1, #F30A0A));
		background-image: -webkit-linear-gradient(#F25C5C, #F30A0A);
    }
    .dropzone-progress > span {
        display: block;
        height: 7px;
        float: left;
        -webkit-border-top-right-radius: 8px;
        -webkit-border-bottom-right-radius: 8px;
        -moz-border-radius-topright: 8px;
        -moz-border-radius-bottomright: 8px;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        -webkit-border-top-left-radius: 20px;
        -webkit-border-bottom-left-radius: 20px;
        -moz-border-radius-topleft: 20px;
        -moz-border-radius-bottomleft: 20px;
        border-radius: 20px;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        -webkit-box-shadow: inset 0 2px 9px rgba(255,255,255,0.3),
        inset 0 -2px 6px rgba(0,0,0,0.4);
        -moz-box-shadow: inset 0 2px 9px rgba(255,255,255,0.3),
        inset 0 -2px 6px rgba(0,0,0,0.4);
        box-shadow: inset 0 2px 9px rgba(255,255,255,0.3),
        inset 0 -2px 6px rgba(0,0,0,0.4);
        position: relative;
        overflow: hidden;
    }
	.green > span {
		background-color: #07D007; 
        background-image: -moz-linear-gradient(top, #07D007, #70E870);
        background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0, #07D007),color-stop(1, #70E870));
        background-image: -webkit-linear-gradient(#07D007, #70E870);
	}
	.dropzone-error-alert{
		margin-left:5px;color:#c9302c;font-size: 10px;
	}
	.dropzone-success-alert{
		margin-left:5px;color:#449d44;font-size: 10px;
	}
	.file-name {
		z-index:5;
		position: relative;
		font-size: 10px;
		font-family: cursive;
		color:#fff;
	}
	 body{
            color:#666;
        }
        #drop {
            border: 2px dashed #ccc;
            width: 100%;
            min-height: 55px;
            margin: 0px;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            border-radius: 4px;
            display:box;
            cursor:pointer;
        }
        .msg-drop{
            margin: 10px;
            text-align: center;
        }
        #fileBox{
            display:none;
        }
        .box{ min-height:55px; }
        .uploadStatusText{
            z-index: 5;
            position: relative;
            top: -11px;
            font-size: 8px;
            font-family: cursive;
            color: #fff;
            left: -9px;
        }
        .closeBtn {
            z-index: 99;
            float: right;
            position: absolute;
            left: 97%;
            width: 100%;
            cursor: pointer;
        }
        #closeBtnIcon:hover{
            color: #5CD0DA;
        }
		.success-mark {
			color : #0E7B0E;
			font-size : 20px;
		}
		.fail-mark {
			color : #AD1616;
			font-size : 20px;
		}
		.upload-status-mark {
			margin-left: -20px;
			margin-top: -10px;
			z-index: 99999;
			opacity: 1;
			/* left: 85%; */
		}