import React from "react";
export interface IDatePickerProps {
    sendDataToParent(data: Date | null):void;
}