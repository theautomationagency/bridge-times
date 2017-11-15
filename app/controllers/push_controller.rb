class PushController < ApplicationController
  @@subscription = nil
  def push
    @@subscription = params[:subscription]
    # Webpush.payload_send(
    #   message: params[:message],
    #   endpoint: params[:subscription][:endpoint],
    #   p256dh: params[:subscription][:keys][:p256dh],
    #   auth: params[:subscription][:keys][:auth],
    #   ttl: 24 * 60 * 60,
    #   vapid: {
    #     subject: 'mailto:sender@example.com',
    #     public_key: ENV['VAPID_PUBLIC_KEY'],
    #     private_key: ENV['VAPID_PRIVATE_KEY']
    #   }
    # )
  end

  def push_again
    Webpush.payload_send(
      message: 'REMOTE PUSH NOTIFICATION',
      endpoint: @@subscription[:endpoint],
      p256dh: @@subscription[:keys][:p256dh],
      auth: @@subscription[:keys][:auth],
      ttl: 24 * 60 * 60,
      vapid: {
        subject: 'mailto:sender@example.com',
        public_key: ENV['VAPID_PUBLIC_KEY'],
        private_key: ENV['VAPID_PRIVATE_KEY']
      }
    )
  end
end
