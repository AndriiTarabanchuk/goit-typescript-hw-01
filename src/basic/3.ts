let firstValue: string | number;
firstValue = "hero";

enum CheckStatus {
  Enable = "enable",
  Disable = "disable",
}
let status: CheckStatus = CheckStatus.Enable;

export { status, firstValue };
