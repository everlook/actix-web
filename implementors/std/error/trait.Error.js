(function() {var implementors = {};
implementors["actix_http"] = [{"text":"impl Error for ConnectError","synthetic":false,"types":[]},{"text":"impl Error for InvalidUrl","synthetic":false,"types":[]},{"text":"impl Error for SendRequestError","synthetic":false,"types":[]},{"text":"impl Error for FreezeRequestError","synthetic":false,"types":[]},{"text":"impl Error for Error","synthetic":false,"types":[]},{"text":"impl&lt;E:&nbsp;Debug&gt; Error for BlockingError&lt;E&gt;","synthetic":false,"types":[]},{"text":"impl Error for PayloadError","synthetic":false,"types":[]},{"text":"impl Error for ContentTypeError","synthetic":false,"types":[]},{"text":"impl Error for ProtocolError","synthetic":false,"types":[]}];
implementors["actix_multipart"] = [{"text":"impl Error for MultipartError","synthetic":false,"types":[]}];
implementors["actix_web"] = [{"text":"impl Error for UrlGenerationError","synthetic":false,"types":[]},{"text":"impl Error for UrlencodedError","synthetic":false,"types":[]},{"text":"impl Error for JsonPayloadError","synthetic":false,"types":[]},{"text":"impl Error for PathError","synthetic":false,"types":[]},{"text":"impl Error for QueryPayloadError","synthetic":false,"types":[]},{"text":"impl Error for ReadlinesError","synthetic":false,"types":[]}];
implementors["awc"] = [{"text":"impl Error for WsClientError","synthetic":false,"types":[]},{"text":"impl Error for JsonPayloadError","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()