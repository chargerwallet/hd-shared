type Deferred<T, I = any, D = any> = {
    id?: I;
    data?: D;
    promise: Promise<T>;
    resolve: (t: T) => void;
    reject: (e: Error) => void;
};
declare function createDeferred<T, I = any, D = any>(arg?: I, data?: D): Deferred<T, I, D>;

interface IHardwareError {
    errorCode: ValueOf<typeof HardwareErrorCode>;
    message?: string;
    params?: any;
}
type ValueOf<P extends object> = P[keyof P];
type HardwareErrorCodeMessageMapping = {
    [P in ValueOf<typeof HardwareErrorCode>]: string;
};
type ErrorCodeUnion = ValueOf<typeof HardwareErrorCode>;
declare class HardwareError extends Error {
    errorCode: ErrorCodeUnion;
    message: string;
    params: any;
    constructor(hardwareError: IHardwareError | string);
}
declare const HardwareErrorCode: {
    readonly UnknownError: 0;
    readonly DeviceFwException: 101;
    readonly DeviceUnexpectedMode: 102;
    readonly DeviceListNotInitialized: 103;
    readonly SelectDevice: 104;
    readonly DeviceNotFound: 105;
    readonly DeviceInitializeFailed: 106;
    readonly DeviceInterruptedFromOutside: 107;
    readonly RequiredButInBootloaderMode: 108;
    readonly DeviceInterruptedFromUser: 109;
    readonly DeviceCheckDeviceIdError: 110;
    readonly DeviceNotSupportPassphrase: 111;
    readonly DeviceCheckPassphraseStateError: 112;
    readonly DeviceNotOpenedPassphrase: 113;
    readonly DeviceOpenedPassphrase: 114;
    readonly DeviceDetectInBootloaderMode: 115;
    readonly NotAllowInBootloaderMode: 116;
    readonly NotInitialized: 200;
    readonly IFrameNotInitialized: 300;
    readonly IFrameAleradyInitialized: 301;
    readonly IFrameLoadFail: 302;
    readonly IframeTimeout: 303;
    readonly IframeBlocked: 304;
    readonly IframeDistrust: 305;
    readonly CallMethodError: 400;
    readonly CallMethodNotResponse: 404;
    readonly CallMethodInvalidParameter: 405;
    readonly FirmwareUpdateDownloadFailed: 406;
    readonly CallMethodNeedUpgradeFirmware: 407;
    readonly CallMethodDeprecated: 408;
    readonly FirmwareUpdateLimitOneDevice: 409;
    readonly FirmwareUpdateManuallyEnterBoot: 410;
    readonly FirmwareUpdateAutoEnterBootFailure: 411;
    readonly NewFirmwareUnRelease: 412;
    readonly UseDesktopToUpdateFirmware: 413;
    readonly NewFirmwareForceUpdate: 414;
    readonly NetworkError: 500;
    readonly TransportNotConfigured: 600;
    readonly TransportCallInProgress: 601;
    readonly TransportNotFound: 602;
    readonly TransportInvalidProtobuf: 603;
    readonly BleScanError: 700;
    readonly BlePermissionError: 701;
    readonly BleLocationError: 702;
    readonly BleRequiredUUID: 703;
    readonly BleConnectedError: 704;
    readonly BleDeviceNotBonded: 705;
    readonly BleServiceNotFound: 706;
    readonly BleCharacteristicNotFound: 707;
    readonly BleMonitorError: 708;
    readonly BleCharacteristicNotifyError: 709;
    readonly BleWriteCharacteristicError: 710;
    readonly BleAlreadyConnected: 711;
    readonly BleLocationServicesDisabled: 712;
    readonly BleTimeoutError: 713;
    readonly BleForceCleanRunPromise: 714;
    readonly BleDeviceBondError: 715;
    readonly BleCharacteristicNotifyChangeFailure: 716;
    readonly RuntimeError: 800;
    readonly PinInvalid: 801;
    readonly PinCancelled: 802;
    readonly ActionCancelled: 803;
    readonly FirmwareError: 804;
    readonly ResponseUnexpectTypeError: 805;
    readonly BridgeNetworkError: 806;
    readonly BridgeTimeoutError: 807;
    readonly BridgeNotInstalled: 808;
    readonly PollingTimeout: 809;
    readonly PollingStop: 810;
    readonly BlindSignDisabled: 811;
    readonly UnexpectPassphrase: 812;
    readonly FileAlreadyExists: 813;
    readonly CheckDownloadFileError: 814;
    readonly NotInSigningMode: 815;
    readonly DataOverload: 816;
    readonly BridgeDeviceDisconnected: 817;
    readonly LowlevelTrasnportConnectError: 900;
};
declare const HardwareErrorCodeMessage: HardwareErrorCodeMessageMapping;
declare const TypedError: (hardwareError: ErrorCodeUnion | string, message?: string, params?: any) => HardwareError;
declare const serializeError: (payload: any) => any;
declare const CreateErrorByMessage: (message: string) => HardwareError;
declare const createNewFirmwareUnReleaseHardwareError: (currentVersion: string, requireVersion: string) => HardwareError;
declare const createNeedUpgradeFirmwareHardwareError: (currentVersion: string, requireVersion: string) => HardwareError;
declare const createNewFirmwareForceUpdateHardwareError: (connectId: string | undefined, deviceId: string | undefined) => HardwareError;
declare const createDeprecatedHardwareError: (currentVersion: string, deprecatedVersion: string) => HardwareError;

declare const HardwareError$1_createNewFirmwareUnReleaseHardwareError: typeof createNewFirmwareUnReleaseHardwareError;
declare const HardwareError$1_createNeedUpgradeFirmwareHardwareError: typeof createNeedUpgradeFirmwareHardwareError;
declare const HardwareError$1_createNewFirmwareForceUpdateHardwareError: typeof createNewFirmwareForceUpdateHardwareError;
declare const HardwareError$1_createDeprecatedHardwareError: typeof createDeprecatedHardwareError;
type HardwareError$1_IHardwareError = IHardwareError;
type HardwareError$1_HardwareError = HardwareError;
declare const HardwareError$1_HardwareError: typeof HardwareError;
declare const HardwareError$1_HardwareErrorCode: typeof HardwareErrorCode;
declare const HardwareError$1_HardwareErrorCodeMessage: typeof HardwareErrorCodeMessage;
declare const HardwareError$1_TypedError: typeof TypedError;
declare const HardwareError$1_serializeError: typeof serializeError;
declare const HardwareError$1_CreateErrorByMessage: typeof CreateErrorByMessage;
declare namespace HardwareError$1 {
  export {
    HardwareError$1_createNewFirmwareUnReleaseHardwareError as createNewFirmwareUnReleaseHardwareError,
    HardwareError$1_createNeedUpgradeFirmwareHardwareError as createNeedUpgradeFirmwareHardwareError,
    HardwareError$1_createNewFirmwareForceUpdateHardwareError as createNewFirmwareForceUpdateHardwareError,
    HardwareError$1_createDeprecatedHardwareError as createDeprecatedHardwareError,
    HardwareError$1_IHardwareError as IHardwareError,
    HardwareError$1_HardwareError as HardwareError,
    HardwareError$1_HardwareErrorCode as HardwareErrorCode,
    HardwareError$1_HardwareErrorCodeMessage as HardwareErrorCodeMessage,
    HardwareError$1_TypedError as TypedError,
    HardwareError$1_serializeError as serializeError,
    HardwareError$1_CreateErrorByMessage as CreateErrorByMessage,
  };
}

export { CreateErrorByMessage, Deferred, HardwareError$1 as ERRORS, HardwareError, HardwareErrorCode, HardwareErrorCodeMessage, IHardwareError, TypedError, createDeferred, createDeprecatedHardwareError, createNeedUpgradeFirmwareHardwareError, createNewFirmwareForceUpdateHardwareError, createNewFirmwareUnReleaseHardwareError, serializeError };
