'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function createDeferred(arg, data) {
    let localResolve = (_t) => { };
    let localReject = (_e) => { };
    let id;
    const promise = new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        localResolve = resolve;
        localReject = reject;
        if (typeof arg === 'function') {
            try {
                yield arg();
            }
            catch (error) {
                reject(error);
            }
        }
        if (typeof arg === 'string')
            id = arg;
    }));
    return {
        id,
        data,
        resolve: localResolve,
        reject: localReject,
        promise,
    };
}

function fillStringWithArguments(value, object) {
    if (typeof value !== 'string')
        return value;
    return value.replace(/\{([^}]+)\}/g, (_, arg) => object[arg] || '?');
}
class HardwareError extends Error {
    constructor(hardwareError) {
        var _a;
        super();
        this.errorCode = HardwareErrorCode.UnknownError;
        this.message = '';
        this.params = {};
        const errorMessageMapping = HardwareErrorCodeMessage;
        this.message = errorMessageMapping[HardwareErrorCode.UnknownError];
        if (typeof hardwareError === 'string') {
            this.errorCode = HardwareErrorCode.UnknownError;
            this.message = hardwareError;
        }
        else {
            const message = (_a = (hardwareError.message || errorMessageMapping[hardwareError.errorCode])) !== null && _a !== void 0 ? _a : '';
            if (message) {
                this.message = fillStringWithArguments(message, hardwareError);
            }
            this.params = hardwareError.params;
            this.errorCode = hardwareError.errorCode;
        }
        this.name = 'HardwareError';
    }
}
const HardwareErrorCode = {
    UnknownError: 0,
    DeviceFwException: 101,
    DeviceUnexpectedMode: 102,
    DeviceListNotInitialized: 103,
    SelectDevice: 104,
    DeviceNotFound: 105,
    DeviceInitializeFailed: 106,
    DeviceInterruptedFromOutside: 107,
    RequiredButInBootloaderMode: 108,
    DeviceInterruptedFromUser: 109,
    DeviceCheckDeviceIdError: 110,
    DeviceNotSupportPassphrase: 111,
    DeviceCheckPassphraseStateError: 112,
    DeviceNotOpenedPassphrase: 113,
    DeviceOpenedPassphrase: 114,
    DeviceDetectInBootloaderMode: 115,
    NotAllowInBootloaderMode: 116,
    NotInitialized: 200,
    IFrameNotInitialized: 300,
    IFrameAleradyInitialized: 301,
    IFrameLoadFail: 302,
    IframeTimeout: 303,
    IframeBlocked: 304,
    IframeDistrust: 305,
    CallMethodError: 400,
    CallMethodNotResponse: 404,
    CallMethodInvalidParameter: 405,
    FirmwareUpdateDownloadFailed: 406,
    CallMethodNeedUpgradeFirmware: 407,
    CallMethodDeprecated: 408,
    FirmwareUpdateLimitOneDevice: 409,
    FirmwareUpdateManuallyEnterBoot: 410,
    FirmwareUpdateAutoEnterBootFailure: 411,
    NewFirmwareUnRelease: 412,
    UseDesktopToUpdateFirmware: 413,
    NewFirmwareForceUpdate: 414,
    NetworkError: 500,
    TransportNotConfigured: 600,
    TransportCallInProgress: 601,
    TransportNotFound: 602,
    TransportInvalidProtobuf: 603,
    BleScanError: 700,
    BlePermissionError: 701,
    BleLocationError: 702,
    BleRequiredUUID: 703,
    BleConnectedError: 704,
    BleDeviceNotBonded: 705,
    BleServiceNotFound: 706,
    BleCharacteristicNotFound: 707,
    BleMonitorError: 708,
    BleCharacteristicNotifyError: 709,
    BleWriteCharacteristicError: 710,
    BleAlreadyConnected: 711,
    BleLocationServicesDisabled: 712,
    BleTimeoutError: 713,
    BleForceCleanRunPromise: 714,
    BleDeviceBondError: 715,
    BleCharacteristicNotifyChangeFailure: 716,
    RuntimeError: 800,
    PinInvalid: 801,
    PinCancelled: 802,
    ActionCancelled: 803,
    FirmwareError: 804,
    ResponseUnexpectTypeError: 805,
    BridgeNetworkError: 806,
    BridgeTimeoutError: 807,
    BridgeNotInstalled: 808,
    PollingTimeout: 809,
    PollingStop: 810,
    BlindSignDisabled: 811,
    UnexpectPassphrase: 812,
    FileAlreadyExists: 813,
    CheckDownloadFileError: 814,
    NotInSigningMode: 815,
    DataOverload: 816,
    BridgeDeviceDisconnected: 817,
    LowlevelTrasnportConnectError: 900,
};
const HardwareErrorCodeMessage = {
    [HardwareErrorCode.UnknownError]: 'Unknown error occurred. Check message property.',
    [HardwareErrorCode.DeviceFwException]: 'Firmware version mismatch',
    [HardwareErrorCode.DeviceUnexpectedMode]: 'Device unexpected mode',
    [HardwareErrorCode.DeviceListNotInitialized]: 'Device list is not initialized',
    [HardwareErrorCode.SelectDevice]: 'Please select the connected device',
    [HardwareErrorCode.DeviceNotFound]: 'Device not found',
    [HardwareErrorCode.DeviceInitializeFailed]: 'Device initialization failed',
    [HardwareErrorCode.DeviceInterruptedFromOutside]: 'Device interrupted',
    [HardwareErrorCode.DeviceInterruptedFromUser]: 'Device interrupted',
    [HardwareErrorCode.RequiredButInBootloaderMode]: 'Device should be in bootloader mode',
    [HardwareErrorCode.DeviceCheckDeviceIdError]: 'Device Id in the features is not same.',
    [HardwareErrorCode.DeviceNotSupportPassphrase]: 'Device not support passphrase',
    [HardwareErrorCode.DeviceCheckPassphraseStateError]: 'Device passphrase state error',
    [HardwareErrorCode.DeviceNotOpenedPassphrase]: 'Device not opened passphrase',
    [HardwareErrorCode.DeviceOpenedPassphrase]: 'Device opened passphrase',
    [HardwareErrorCode.DeviceDetectInBootloaderMode]: 'Device in bootloader mode',
    [HardwareErrorCode.NotAllowInBootloaderMode]: 'Device not allow in bootloader mode',
    [HardwareErrorCode.NotInitialized]: 'Not initialized',
    [HardwareErrorCode.IFrameNotInitialized]: 'IFrame not initialized',
    [HardwareErrorCode.IFrameAleradyInitialized]: 'IFrame alerady initialized',
    [HardwareErrorCode.IFrameLoadFail]: 'IFrame load fail',
    [HardwareErrorCode.IframeTimeout]: 'init iframe time out',
    [HardwareErrorCode.IframeBlocked]: 'IFrame blocked',
    [HardwareErrorCode.IframeDistrust]: 'IFrame host not trust',
    [HardwareErrorCode.CallMethodError]: 'Runtime errors during method execution',
    [HardwareErrorCode.CallMethodNotResponse]: 'Method does not responding',
    [HardwareErrorCode.CallMethodInvalidParameter]: 'Call method invalid parameter',
    [HardwareErrorCode.FirmwareUpdateDownloadFailed]: 'Firmware update download failed',
    [HardwareErrorCode.CallMethodNeedUpgradeFirmware]: 'Call method need upgrade firmware',
    [HardwareErrorCode.CallMethodDeprecated]: 'Call method is deprecated',
    [HardwareErrorCode.FirmwareUpdateLimitOneDevice]: 'Only one device can be connected during firmware upgrade',
    [HardwareErrorCode.FirmwareUpdateManuallyEnterBoot]: 'You need to manually enter boot',
    [HardwareErrorCode.FirmwareUpdateAutoEnterBootFailure]: 'Description Failed to automatically enter boot',
    [HardwareErrorCode.NewFirmwareUnRelease]: 'new firmware has not been released yet',
    [HardwareErrorCode.NewFirmwareForceUpdate]: 'new firmware has been released, please update',
    [HardwareErrorCode.UseDesktopToUpdateFirmware]: 'Please use OneKey desktop client to update the firmware',
    [HardwareErrorCode.NetworkError]: 'Network request error',
    [HardwareErrorCode.TransportNotConfigured]: 'Transport not configured',
    [HardwareErrorCode.TransportCallInProgress]: 'Transport call in progress',
    [HardwareErrorCode.TransportNotFound]: 'Transport not found',
    [HardwareErrorCode.TransportInvalidProtobuf]: 'Transport invalid protobuf',
    [HardwareErrorCode.BleScanError]: 'BLE scan error',
    [HardwareErrorCode.BlePermissionError]: 'Bluetooth required to be turned on',
    [HardwareErrorCode.BleLocationError]: 'Location permissions for the application are not available',
    [HardwareErrorCode.BleRequiredUUID]: 'uuid is required',
    [HardwareErrorCode.BleConnectedError]: 'connected error is always runtime error',
    [HardwareErrorCode.BleDeviceNotBonded]: 'device is not bonded',
    [HardwareErrorCode.BleServiceNotFound]: 'BLEServiceNotFound: service not found',
    [HardwareErrorCode.BleCharacteristicNotFound]: 'BLEServiceNotFound: service not found',
    [HardwareErrorCode.BleMonitorError]: 'Monitor Error: characteristic not found',
    [HardwareErrorCode.BleCharacteristicNotifyError]: 'Characteristic Notify Error',
    [HardwareErrorCode.BleWriteCharacteristicError]: 'Write Characteristic Error',
    [HardwareErrorCode.BleAlreadyConnected]: 'Already connected to device',
    [HardwareErrorCode.BleLocationServicesDisabled]: 'Location Services disabled',
    [HardwareErrorCode.BleTimeoutError]: 'The connection has timed out unexpectedly.',
    [HardwareErrorCode.BleForceCleanRunPromise]: 'Force clean Bluetooth run promise',
    [HardwareErrorCode.BleDeviceBondError]: 'Bluetooth pairing failed',
    [HardwareErrorCode.BleCharacteristicNotifyChangeFailure]: 'Characteristic Notify Change Failure',
    [HardwareErrorCode.RuntimeError]: 'Runtime error',
    [HardwareErrorCode.PinInvalid]: 'Pin invalid',
    [HardwareErrorCode.PinCancelled]: 'Pin cancelled',
    [HardwareErrorCode.ActionCancelled]: 'Action cancelled by user',
    [HardwareErrorCode.FirmwareError]: 'Firmware installation failed',
    [HardwareErrorCode.ResponseUnexpectTypeError]: 'Response type is not expected',
    [HardwareErrorCode.BridgeNetworkError]: 'Bridge network error',
    [HardwareErrorCode.BridgeTimeoutError]: 'Bridge network timeout',
    [HardwareErrorCode.BridgeNotInstalled]: 'Bridge not installed',
    [HardwareErrorCode.BridgeDeviceDisconnected]: 'Bridge device disconnected during action',
    [HardwareErrorCode.PollingTimeout]: 'Polling timeout',
    [HardwareErrorCode.PollingStop]: 'Polling stop',
    [HardwareErrorCode.BlindSignDisabled]: 'Please confirm the BlindSign enabled',
    [HardwareErrorCode.UnexpectPassphrase]: 'Unexpect passphrase',
    [HardwareErrorCode.FileAlreadyExists]: 'File already exists',
    [HardwareErrorCode.CheckDownloadFileError]: 'Check download file error',
    [HardwareErrorCode.NotInSigningMode]: 'not in signing mode',
    [HardwareErrorCode.DataOverload]: 'Params data overload',
    [HardwareErrorCode.LowlevelTrasnportConnectError]: 'Lowlevel transport connect error',
};
const TypedError = (hardwareError, message, params) => {
    if (typeof hardwareError === 'string') {
        return new HardwareError(hardwareError);
    }
    return new HardwareError({ errorCode: hardwareError, message: message !== null && message !== void 0 ? message : '', params });
};
const serializeError = (payload) => {
    if (payload && payload.error instanceof HardwareError) {
        return {
            error: payload.error.message,
            code: payload.error.errorCode,
            params: payload.error.params,
        };
    }
    if (payload && payload.error && payload.error.name === 'AxiosError') {
        return { error: payload.error.message, code: HardwareErrorCode.BridgeNetworkError };
    }
    if (payload && payload.error instanceof Error) {
        return { error: payload.error.message, code: payload.error.code };
    }
    return payload;
};
const CreateErrorByMessage = (message) => {
    for (const code of Object.values(HardwareErrorCode)) {
        if (HardwareErrorCodeMessage[code] === message) {
            return TypedError(code);
        }
    }
    return new HardwareError(message);
};
const createNewFirmwareUnReleaseHardwareError = (currentVersion, requireVersion) => TypedError(HardwareErrorCode.NewFirmwareUnRelease, 'Device firmware version is too low, please update to the latest version', { current: currentVersion, require: requireVersion });
const createNeedUpgradeFirmwareHardwareError = (currentVersion, requireVersion) => TypedError(HardwareErrorCode.CallMethodNeedUpgradeFirmware, `Device firmware version is too low, please update to ${requireVersion}`, { current: currentVersion, require: requireVersion });
const createNewFirmwareForceUpdateHardwareError = (connectId, deviceId) => TypedError(HardwareErrorCode.NewFirmwareForceUpdate, 'Device firmware version is too low, please update to the latest version', { connectId, deviceId });
const createDeprecatedHardwareError = (currentVersion, deprecatedVersion) => TypedError(HardwareErrorCode.CallMethodDeprecated, `Device firmware version is too high, this method has been deprecated in ${deprecatedVersion}`, { current: currentVersion, deprecated: deprecatedVersion });

var HardwareError$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    HardwareError: HardwareError,
    HardwareErrorCode: HardwareErrorCode,
    HardwareErrorCodeMessage: HardwareErrorCodeMessage,
    TypedError: TypedError,
    serializeError: serializeError,
    CreateErrorByMessage: CreateErrorByMessage,
    createNewFirmwareUnReleaseHardwareError: createNewFirmwareUnReleaseHardwareError,
    createNeedUpgradeFirmwareHardwareError: createNeedUpgradeFirmwareHardwareError,
    createNewFirmwareForceUpdateHardwareError: createNewFirmwareForceUpdateHardwareError,
    createDeprecatedHardwareError: createDeprecatedHardwareError
});

exports.CreateErrorByMessage = CreateErrorByMessage;
exports.ERRORS = HardwareError$1;
exports.HardwareError = HardwareError;
exports.HardwareErrorCode = HardwareErrorCode;
exports.HardwareErrorCodeMessage = HardwareErrorCodeMessage;
exports.TypedError = TypedError;
exports.createDeferred = createDeferred;
exports.createDeprecatedHardwareError = createDeprecatedHardwareError;
exports.createNeedUpgradeFirmwareHardwareError = createNeedUpgradeFirmwareHardwareError;
exports.createNewFirmwareForceUpdateHardwareError = createNewFirmwareForceUpdateHardwareError;
exports.createNewFirmwareUnReleaseHardwareError = createNewFirmwareUnReleaseHardwareError;
exports.serializeError = serializeError;
