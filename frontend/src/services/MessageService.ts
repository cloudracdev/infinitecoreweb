// src/services/MessageService.ts
import { type ReactNode } from "react"
import { toast, type ToastOptions, type Id, type UpdateOptions, Bounce } from "react-toastify"

type Content = string | ReactNode

export class MessageService {
  private static base: ToastOptions = {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  }

  static configure(opts: ToastOptions) {
    this.base = { ...this.base, ...opts }
  }

  static setSuccess(msg: Content, opts?: ToastOptions) {
    toast.success(msg, { ...this.base, ...opts })
  }
  static setInfo(msg: Content, opts?: ToastOptions) {
    toast.info(msg, { ...this.base, ...opts })
  }
  static setWarn(msg: Content, opts?: ToastOptions) {
    toast.warn(msg, { ...this.base, ...opts })
  }
  static setError(msg: Content, opts?: ToastOptions) {
    toast.error(msg, { ...this.base, ...opts })
  }
  static setDefault(msg: Content, opts?: ToastOptions) {
    toast(msg, { ...this.base, ...opts })
  }

  static setLoading(msg: Content, opts?: ToastOptions): Id {
    return toast.loading(msg, { ...this.base, ...opts, autoClose: false })
  }

  static update(id: Id, msg: Content, opts?: UpdateOptions) {
    toast.update(id, {
      ...opts,
      render: msg,
    })
  }

  static close(id?: Id) {
    if (id) toast.dismiss(id)
    else toast.dismiss()
  }

  static fromPromise<T>(
    promise: Promise<T>,
    messages:
      | {
          pending: Content
          success: (val: T) => Content | Content
          error: (err: unknown) => Content | Content
        }
      | {
          pending: Content
          success: Content
          error: Content
        },
    opts?: ToastOptions,
  ) {
    return toast.promise(promise, messages as any, { ...this.base, ...opts })
  }

  /** (opcional) evitar toasts duplicados em janelas curtas */
  private static lastKey?: string
  private static lastAt = 0
  static setOnce(
    type: "success" | "info" | "warn" | "error" | "default",
    msg: string,
    windowMs = 1500,
    opts?: ToastOptions,
  ) {
    const key = `${type}:${msg}`
    const now = Date.now()
    if (this.lastKey === key && now - this.lastAt < windowMs) return
    this.lastKey = key
    this.lastAt = now

    const map = {
      success: this.setSuccess,
      info: this.setInfo,
      warn: this.setWarn,
      error: this.setError,
      default: this.setDefault,
    } as const

    map[type].call(this, msg, opts)
  }
}
